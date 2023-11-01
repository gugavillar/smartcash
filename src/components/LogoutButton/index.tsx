import { MenuItem } from '@chakra-ui/react'

import { useAuth } from '@/hooks'

export const LogoutButton = () => {
  const { logoutSystem } = useAuth()

  return <MenuItem onClick={logoutSystem}>Logout</MenuItem>
}
