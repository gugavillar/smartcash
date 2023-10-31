import { useEffect, useMemo, useState } from 'react'

import { Flex } from '@chakra-ui/react'
import { onValue, ref } from 'firebase/database'

import { Header, ListTransactions, Summary } from '@/components'
import { ExpensesReturn, database } from '@/services'

export const AppComponent = () => {
  const [transactions, setTransactions] = useState<Array<ExpensesReturn>>([])

  useEffect(() => {
    let expenses: Array<ExpensesReturn>
    const query = ref(database, 'expenses')

    return onValue(query, (snapshots) => {
      expenses = []
      if (snapshots.exists()) {
        snapshots.forEach((transaction) => {
          expenses.push({ key: transaction.key, ...transaction.val() })
        })
      }
      setTransactions(expenses)
    })
  }, [])

  const totalOfIncome = useMemo(
    () =>
      transactions?.reduce((acc, transaction) => {
        if (transaction.transactionType === 'income') {
          acc += transaction.transactionValue
        }
        return acc
      }, 0),
    [transactions],
  )

  const totalOfOutcome = useMemo(
    () =>
      transactions?.reduce((acc, transaction) => {
        if (transaction.transactionType === 'outcome') {
          acc += transaction.transactionValue
        }
        return acc
      }, 0),
    [transactions],
  )

  return (
    <Flex width="full" minHeight="100vh" flexDirection="column" bg="gray.100">
      <Header />
      <Summary totalOfIncome={totalOfIncome} totalOfOutcome={totalOfOutcome} />
      <ListTransactions data={transactions} />
    </Flex>
  )
}
