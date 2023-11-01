import {
  CardBody,
  CardHeader,
  Card as ChakraCard,
  HStack,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react'

import { currencyValue, formattedDateToBR } from '@/helpers'
import { useFinancial } from '@/hooks'

type CardsProps = {
  transactionName: string
  transactionValue: number
  transactionType: string
  transactionDate: string
  transactionAccount: string
}

export const Cards = ({
  transactionType,
  transactionName,
  transactionValue,
  transactionDate,
  transactionAccount,
}: CardsProps) => {
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
    <ChakraCard width="full">
      <CardHeader>
        <VStack align="flex-start">
          <Text fontSize="sm">{transactionName}</Text>
          <Heading fontSize="xl" color={colorFont}>
            {formattedValue}
          </Heading>
        </VStack>
      </CardHeader>
      <CardBody pt={0}>
        <HStack fontSize="sm" justify="space-between" color="gray.500">
          <Text>{account?.label}</Text>
          <Text>{formattedDate}</Text>
        </HStack>
      </CardBody>
    </ChakraCard>
  )
}
