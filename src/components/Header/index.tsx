import { Button, Center, Flex, Heading, VStack } from '@chakra-ui/react'
import { CurrencyDollar } from 'phosphor-react'

import { Transaction } from '@/components'
import { useAuth } from '@/hooks'

export const Header = () => {
  const { logoutSystem } = useAuth()

  return (
    <Flex width="full" height={56} maxHeight={56} bg="blue.600">
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
          height={32}
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
          <VStack spacing={4}>
            <Button
              bg="green.400"
              color="white"
              width={{ base: 'full', md: 48, lg: 48 }}
              height={12}
              _hover={{
                bg: 'green.400',
                opacity: 0.7,
              }}
              _active={{ bg: 'green.400' }}
              onClick={logoutSystem}
            >
              Logout
            </Button>
            <Transaction />
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
