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
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, uid } = user

        if (!uid || !displayName) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
        })
      }
    })
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const { displayName, uid } = result.user

      if (!displayName || !uid) {
        throw new Error('Missing information from Google Account.')
      }
      setUser({
        id: uid,
        name: displayName,
      })
    }
  }

  async function logoutSystem() {
    if (user) {
      await signOut(auth)
      setUser(undefined)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logoutSystem }}>
      {props.children}
    </AuthContext.Provider>
  )
}
