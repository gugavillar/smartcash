import { Td } from '@chakra-ui/react'

import { currencyValue, formattedDateToBR } from '@/helpers'

type RowProps = {
  transactionName: string
  transactionValue: number
  transactionType: string
  transactionDate: string
}

export const Row = ({
  transactionName,
  transactionType,
  transactionValue,
  transactionDate,
}: RowProps) => {
  const colorFont = transactionType === 'income' ? 'green.300' : 'red.300'
  const formattedValue =
    transactionType === 'income'
      ? currencyValue(transactionValue)
      : `- ${currencyValue(transactionValue)}`
  const formattedDate = formattedDateToBR(transactionDate)
  return (
    <>
      <Td>{transactionName}</Td>
      <Td color={colorFont}>{formattedValue}</Td>
      <Td color="gray.500">{formattedDate}</Td>
    </>
  )
}
