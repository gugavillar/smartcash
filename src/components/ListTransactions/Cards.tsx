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

type CardsProps = {
  transactionName: string
  transactionValue: number
  transactionType: string
  transactionDate: string
}

export const Cards = ({
  transactionType,
  transactionName,
  transactionValue,
  transactionDate,
}: CardsProps) => {
  const colorFont = transactionType === 'income' ? 'green.300' : 'red.300'
  const formattedValue =
    transactionType === 'income'
      ? currencyValue(transactionValue)
      : `- ${currencyValue(transactionValue)}`
  const formattedDate = formattedDateToBR(transactionDate)
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
          <Text>{formattedDate}</Text>
        </HStack>
      </CardBody>
    </ChakraCard>
  )
}
