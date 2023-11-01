import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, push } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const database = getDatabase(app)
export const auth = getAuth(app)

type WriteExpenseDataArguments = {
  data: {
    transactionName: string
    transactionValue: number
    transactionType: 'income' | 'outcome' | undefined
    transactionDate: string
    transactionAccount: string
  }
}

export const writeExpenseData = async ({ data }: WriteExpenseDataArguments) => {
  const response = await push(ref(database, 'expenses/'), {
    ...data,
  })
  return response
}

export type ExpensesReturn = {
  key: string
  transactionDate: string
  transactionName: string
  transactionType: string
  transactionValue: number
  transactionAccount: string
}

type WriteAccountDataArguments = {
  accountName: string
}

export const writeAccountData = async (
  accountName: WriteAccountDataArguments,
) => {
  const response = await push(ref(database, 'accounts/'), accountName)
  return response
}

export type AccountsReturn = {
  key: string
  accountName: string
}
