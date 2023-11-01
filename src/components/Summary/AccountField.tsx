import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { Flex, Select } from '@chakra-ui/react'

type AccountFieldProps = {
  account: string
  setAccount: Dispatch<SetStateAction<string>>
  accounts: Array<{
    label: string
    value: string
  }>
}

export const AccountField = ({
  account,
  setAccount,
  accounts,
}: AccountFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setAccount(event.target.value)
  }

  return (
    <Flex>
      <Select
        mt={4}
        maxWidth={{ base: 'full', md: 64, lg: 64 }}
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        color="gray.500"
        _placeholder={{ color: 'gray.500' }}
        placeholder="Selecione a conta"
        value={account}
        onChange={handleChange}
      >
        {accounts.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </Flex>
  )
}
