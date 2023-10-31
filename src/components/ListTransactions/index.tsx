import { Flex, Heading, Tr, VStack, useBreakpointValue } from '@chakra-ui/react'

import { Table } from '@/components'
import { ExpensesReturn } from '@/services'

import { Cards } from './Cards'
import { Row } from './Row'

type ListTransactionProps = {
  data: Array<ExpensesReturn>
}

export const ListTransactions = ({ data }: ListTransactionProps) => {
  const variant = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
    },
    {
      fallback: undefined,
    },
  )

  if (variant === undefined) return null

  let content = (
    <Heading textAlign="center" my="auto">
      Não existe transações cadastras.
    </Heading>
  )

  if (data.length) {
    if (variant) {
      content = (
        <VStack spacing={4} width="full">
          {data?.map(({ key, ...transaction }) => (
            <Cards key={key} {...transaction} />
          ))}
        </VStack>
      )
    } else {
      content = (
        <Table>
          {data?.map(({ key, ...transaction }) => (
            <Tr key={key} bg="white">
              <Row {...transaction} />
            </Tr>
          ))}
        </Table>
      )
    }
  }

  return (
    <Flex
      flexDirection="column"
      flexGrow={1}
      maxWidth="100rem"
      px={{ base: 4, md: 20, lg: 40 }}
      mt={8}
      pb={6}
    >
      {content}
    </Flex>
  )
}
