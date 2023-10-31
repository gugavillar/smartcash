import { AuthContextProvider } from '@/contexts'

import { LoginComponent } from './components/LoginComponent'

export const App = () => {
  return (
    <AuthContextProvider>
      <LoginComponent />
    </AuthContextProvider>
  )
}
