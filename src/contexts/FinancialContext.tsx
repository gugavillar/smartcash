import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { onValue, ref } from 'firebase/database'

import { ExpensesReturn, database } from '@/services'

type SelectObject = {
  label: string
  value: string
}

type FinancialContextProviderProps = {
  children: ReactNode
}

type FinancialContextType = {
  transactions: Array<ExpensesReturn>
  accounts: Array<SelectObject>
  totalOfIncome: number
  totalOfOutcome: number
  setSelectedAccount: Dispatch<SetStateAction<string>>
  selectedAccount: string
}

export const FinancialContext = createContext({} as FinancialContextType)

export const FinancialContextProvider = ({
  children,
}: FinancialContextProviderProps) => {
  const [transactions, setTransactions] = useState<Array<ExpensesReturn>>([])
  const [accounts, setAccounts] = useState<Array<SelectObject>>([])
  const [selectedAccount, setSelectedAccount] = useState('')

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
      const newExpenses = selectedAccount
        ? expenses?.filter(
            (expense) => expense.transactionAccount === selectedAccount,
          )
        : expenses
      setTransactions(newExpenses)
    })
  }, [selectedAccount])

  useEffect(() => {
    let accounts: Array<SelectObject>
    const query = ref(database, 'accounts')

    return onValue(query, (snapshots) => {
      accounts = []
      if (snapshots.exists()) {
        snapshots.forEach((account) => {
          const { accountName } = account.val()
          accounts.push({ value: account.key, label: accountName })
        })
      }
      setAccounts(accounts)
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
    <FinancialContext.Provider
      value={{
        accounts,
        transactions,
        totalOfIncome,
        totalOfOutcome,
        selectedAccount,
        setSelectedAccount,
      }}
    >
      {children}
    </FinancialContext.Provider>
  )
}
