import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'

type SearchFieldProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const SearchField = ({ search, setSearch }: SearchFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <Flex my={4}>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlass />
        </InputLeftElement>
        <Input
          maxWidth={{ base: 'full', md: 64, lg: 64 }}
          height={8}
          bg="gray.100"
          border="1px solid"
          borderColor="gray.300"
          px={6}
          py={5}
          color="gray.500"
          _placeholder={{ color: 'gray.500' }}
          placeholder="Buscar"
          value={search}
          onChange={handleChange}
        />
      </InputGroup>
    </Flex>
  )
}
