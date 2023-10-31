import { ReactNode } from 'react'

import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react'

import { currencyValue } from '@/helpers'

type SummaryCardProps = {
  label: string
  value: number
  icon: ReactNode
  isTotalCard?: boolean
}

export const SummaryCard = ({
  icon,
  label,
  value,
  isTotalCard,
}: SummaryCardProps) => {
  const formattedValue = currencyValue(value)
  return (
    <Card
      width="full"
      height="8.5rem"
      flexGrow={1}
      bg={isTotalCard ? 'green.300' : 'white'}
    >
      <CardHeader>
        <HStack align="center" justify="space-between">
          <Text
            color={isTotalCard ? 'white' : 'gray.500'}
            fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
          >
            {label}
          </Text>
          {icon}
        </HStack>
      </CardHeader>
      <CardBody pt={0}>
        <Heading
          fontWeight="medium"
          color={isTotalCard ? 'white' : 'black'}
          fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}
        >
          {formattedValue}
        </Heading>
      </CardBody>
    </Card>
  )
}
