import { Flex } from '@chakra-ui/react'

import { Header, ListTransactions, Summary } from '@/components'
import { useFinancial } from '@/hooks'

export const AppComponent = () => {
  const { transactions, totalOfIncome, totalOfOutcome } = useFinancial()

  return (
    <Flex width="full" minHeight="100vh" flexDirection="column" bg="gray.100">
      <Header />
      <Summary totalOfIncome={totalOfIncome} totalOfOutcome={totalOfOutcome} />
      <ListTransactions data={transactions} />
    </Flex>
  )
}
