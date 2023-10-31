import {
  Button,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

import { writeExpenseData } from '@/services'
import { transactionResolver } from '@/validations'

import { TransactionDrawer } from './TransactionDrawer'
import { TransactionModal } from './TransactionModal'

const defaultValues = {
  transactionName: '',
  transactionValue: '',
  transactionType: undefined,
  transactionDate: '',
  transactionCategory: '',
}

type TransactionType = 'income' | 'outcome'

export type FormTransactionType = {
  transactionName: string
  transactionValue: string
  transactionDate: string
  transactionType: NonNullable<TransactionType | undefined>
  transactionCategory: string
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
      <Button
        bg="blue.400"
        color="white"
        width={{ base: 'fit-content', md: 48, lg: 48 }}
        height={12}
        _hover={{
          bg: 'blue.400',
          opacity: 0.7,
        }}
        _active={{
          bg: 'blue.400',
        }}
        onClick={onOpen}
      >
        Nova transação
      </Button>
      <FormProvider {...methods}>
        {variant ? (
          <TransactionDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        ) : (
          <TransactionModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
          />
        )}
      </FormProvider>
    </>
  )
}
