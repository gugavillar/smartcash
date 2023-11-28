import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { CurrencyDollar } from 'phosphor-react'

import { Login } from '@/components'
import { FinancialContextProvider } from '@/contexts'
import { useAuth } from '@/hooks'

import { AppComponent } from './AppComponent'

export const LoginComponent = () => {
  const { user, signInWithGoogle, isLogged } = useAuth()
  const imageSize = useBreakpointValue({
    base: 36,
    md: 48,
    lg: 64,
  })

  if (user?.id) {
    return (
      <FinancialContextProvider>
        <AppComponent />
      </FinancialContextProvider>
    )
  }

  return (
    <Flex
      width="full"
      minHeight="100vh"
      flexDirection="column"
      align="center"
      justify="center"
      bg="gray.100"
    >
      <Flex width="full" height="inherit">
        <Box width="100%" display={{ base: 'none', md: 'block', lg: 'block' }}>
          <Login />
        </Box>
        <Flex
          flexDirection="column"
          width="full"
          height="inherit"
          align="center"
          justify="center"
        >
          <VStack spacing={16}>
            <HStack spacing={{ base: 4, md: 6, lg: 6 }}>
              <Center bg="green.400" p={2} borderRadius="full">
                <CurrencyDollar size={imageSize} color="white" />
              </Center>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                Smart Cash
              </Heading>
            </HStack>
            <Button
              width="full"
              bg="green.400"
              color="white"
              height={14}
              _hover={{ bg: 'green.400', opacity: 0.7 }}
              _active={{ bg: 'green.400' }}
              onClick={signInWithGoogle}
              isLoading={isLogged}
            >
              Entrar
            </Button>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
