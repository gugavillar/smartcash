import { ChangeEvent, memo } from 'react'

import { Flex, Select } from '@chakra-ui/react'

import { useFinancial } from '@/hooks'

export const AccountField = memo(() => {
  const { accounts, selectedAccount, setSelectedAccount } = useFinancial()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedAccount(event.target.value)
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
        value={selectedAccount}
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
})

AccountField.displayName = 'AccountField'
