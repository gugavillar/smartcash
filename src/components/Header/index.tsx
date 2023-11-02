import { memo } from 'react'

import { Center, Flex, Heading } from '@chakra-ui/react'
import { CurrencyDollar } from 'phosphor-react'

import { MenuButton } from '@/components'

export const Header = memo(() => {
  return (
    <Flex width="full" height={32} maxHeight={32} bg="blue.600">
      <Flex
        width="full"
        maxWidth="100rem"
        mx="auto"
        px={{ base: 4, md: 20, lg: 40 }}
        pt={8}
        height="inherit"
      >
        <Flex
          width="full"
          height={16}
          align="center"
          justify="space-between"
          color="white"
        >
          <Flex align="center" gap={4}>
            <Center bg="green.400" p={2} borderRadius="full">
              <CurrencyDollar size={24} color="white" />
            </Center>
            <Heading fontSize="xl">Smart Cash</Heading>
          </Flex>
          <MenuButton />
        </Flex>
      </Flex>
    </Flex>
  )
})

Header.displayName = 'Header'
