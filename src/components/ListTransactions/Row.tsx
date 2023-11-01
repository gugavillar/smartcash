import { Td } from '@chakra-ui/react'

import { currencyValue, formattedDateToBR } from '@/helpers'
import { useFinancial } from '@/hooks'

type RowProps = {
  transactionName: string
  transactionValue: number
  transactionType: string
  transactionDate: string
  transactionAccount: string
}

export const Row = ({
  transactionName,
  transactionType,
  transactionValue,
  transactionDate,
  transactionAccount,
}: RowProps) => {
  const { accounts } = useFinancial()

  const colorFont = transactionType === 'income' ? 'green.300' : 'red.300'

  const formattedValue =
    transactionType === 'income'
      ? currencyValue(transactionValue)
      : `- ${currencyValue(transactionValue)}`

  const formattedDate = formattedDateToBR(transactionDate)

  const account = accounts.find(
    (account) => account.value === transactionAccount,
  )
  return (
    <>
      <Td>{transactionName}</Td>
      <Td color={colorFont}>{formattedValue}</Td>
      <Td color="gray.500">{formattedDate}</Td>
      <Td color="gray.500">{account?.label}</Td>
    </>
  )
}
