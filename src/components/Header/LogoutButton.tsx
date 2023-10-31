import { Button } from '@chakra-ui/react'

import { useAuth } from '@/hooks'

export const LogoutButton = () => {
  const { logoutSystem } = useAuth()
  return (
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
  )
}
