import { AuthContextProvider, FinancialContextProvider } from '@/contexts'

import { LoginComponent } from './components/LoginComponent'

export const App = () => {
  return (
    <AuthContextProvider>
      <FinancialContextProvider>
        <LoginComponent />
      </FinancialContextProvider>
    </AuthContextProvider>
  )
}
