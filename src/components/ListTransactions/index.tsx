import { useState } from 'react'

import { Flex, Heading, Tr, VStack, useBreakpointValue } from '@chakra-ui/react'

import { Table } from '@/components'
import { ExpensesReturn } from '@/services'

import { Cards } from './Cards'
import { Row } from './Row'
import { SearchField } from './SearchField'

type ListTransactionProps = {
  data: Array<ExpensesReturn>
}

export const ListTransactions = ({ data }: ListTransactionProps) => {
  const [search, setSearch] = useState('')

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

  const transactions = search
    ? data?.filter((transaction) =>
        transaction.transactionName.includes(search),
      )
    : data

  let content = (
    <Heading textAlign="center" my="auto">
      Não existe transações cadastras.
    </Heading>
  )

  if (data.length && variant) {
    content = (
      <VStack spacing={4} width="full">
        {transactions?.map(({ key, ...transaction }) => (
          <Cards key={key} {...transaction} />
        ))}
      </VStack>
    )
  } else {
    content = (
      <Table>
        {transactions?.map(({ key, ...transaction }) => (
          <Tr key={key} bg="white">
            <Row {...transaction} />
          </Tr>
        ))}
      </Table>
    )
  }

  return (
    <Flex
      flexDirection="column"
      flexGrow={1}
      maxWidth="100rem"
      px={{ base: 4, md: 20, lg: 40 }}
      pb={6}
    >
      <SearchField search={search} setSearch={setSearch} />
      {content}
    </Flex>
  )
}
