import { Td } from '@chakra-ui/react'

import { currencyValue } from '@/helpers'

type RowProps = {
  transactionName: string
  transactionValue: number
  transactionCategory: string
  transactionType: string
}

export const Row = ({
  transactionCategory,
  transactionName,
  transactionType,
  transactionValue,
}: RowProps) => {
  const colorFont = transactionType === 'income' ? 'green.300' : 'red.300'
  const formattedValue =
    transactionType === 'income'
      ? currencyValue(transactionValue)
      : `- ${currencyValue(transactionValue)}`

  return (
    <>
      <Td>{transactionName}</Td>
      <Td color={colorFont}>{formattedValue}</Td>
      <Td color="gray.500">{transactionCategory}</Td>
      <Td color="gray.500">01/11/2023</Td>
    </>
  )
}
