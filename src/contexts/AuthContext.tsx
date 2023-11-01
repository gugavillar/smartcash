import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import { auth } from '@/services'

type User = {
  id: string
  name: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
  logoutSystem: () => Promise<void>
  isLogged: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>()
  const [isLogged, setIsLogged] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true)
        const { displayName, uid } = user

        if (!uid || !displayName) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
        })
      } else {
        setIsLogged(false)
      }
    })
  }, [])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      setIsLogged(true)
      const { displayName, uid } = result.user

      if (!displayName || !uid) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        id: uid,
        name: displayName,
      })
    } else {
      setIsLogged(false)
    }
  }

  const logoutSystem = async () => {
    if (user) {
      await signOut(auth)
      setIsLogged(false)
      setUser(undefined)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, logoutSystem, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  )
}
