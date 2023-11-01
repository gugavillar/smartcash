import { useContext } from 'react'

import { FinancialContext } from '@/contexts'

export const useFinancial = () => {
  const value = useContext(FinancialContext)
  return value
}
