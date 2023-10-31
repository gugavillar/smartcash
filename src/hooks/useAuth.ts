import { useContext } from 'react'

import { AuthContext } from '@/contexts'

export const useAuth = () => {
  const value = useContext(AuthContext)
  return value
}
