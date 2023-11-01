import {
  useBreakpointValue,
  useDisclosure,
  useToast,
  MenuItem,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

import { WrapperDrawer, WrapperModal } from '@/components'
import { writeExpenseData } from '@/services'
import { transactionResolver } from '@/validations'

import { TransactionForm } from './TransactionForm'
import { TransactionFormButton } from './TransactionFormButton'

const defaultValues = {
  transactionAccount: '',
  transactionName: '',
  transactionValue: '',
  transactionType: undefined,
  transactionDate: '',
  transactionCategory: '',
}

type TransactionType = 'income' | 'outcome'

export type FormTransactionType = {
  transactionAccount: string
  transactionName: string
  transactionValue: string
  transactionDate: string
  transactionType: NonNullable<TransactionType | undefined>
}

export const Transaction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    isClosable: true,
    duration: 3000,
  })

  const methods = useForm<FormTransactionType>({
    defaultValues,
    resolver: transactionResolver,
  })

  const variant = useBreakpointValue(
    {
      base: true,
      md: false,
      lg: false,
    },
    {
      fallback: undefined,
    },
  )

  if (variant === undefined) return null

  const onSubmit = async (values: FormTransactionType) => {
    const data = {
      ...values,
      transactionValue: Number(values?.transactionValue),
    }
    try {
      const { key } = await writeExpenseData({ data })
      if (key) {
        return toast({
          title: 'Transação cadastrada com sucesso.',
          status: 'success',
        })
      }
    } catch (error) {
      return toast({
        title: 'Ocorreu um erro tente novamente.',
        status: 'error',
      })
    } finally {
      onClose()
      methods.reset()
    }
  }

  return (
    <>
      <MenuItem onClick={onOpen}>Nova transação</MenuItem>
      <FormProvider {...methods}>
        {variant ? (
          <WrapperDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Cadastrar transação"
            contentBody={<TransactionForm />}
            contentFooter={<TransactionFormButton />}
          />
        ) : (
          <WrapperModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Cadastrar transação"
            contentBody={<TransactionForm />}
            contentFooter={<TransactionFormButton />}
          />
        )}
      </FormProvider>
    </>
  )
}
