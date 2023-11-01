import { ReactNode } from 'react'

import {
  TableContainer,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
} from '@chakra-ui/react'

type TableProps = {
  children: ReactNode
}

export const Table = ({ children }: TableProps) => {
  return (
    <TableContainer>
      <ChakraTable
        style={{
          borderCollapse: 'separate',
          borderSpacing: '0 0.5rem',
        }}
      >
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Valor</Th>
            <Th>Data</Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
