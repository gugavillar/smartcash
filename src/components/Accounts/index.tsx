import {
  MenuItem,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'

import { WrapperDrawer, WrapperModal } from '@/components'
import { writeAccountData } from '@/services'
import { accountResolver } from '@/validations'

import { AccountForm } from './AccountForm'
import { AccountFormButton } from './AccountFormButton'

const defaultValues = {
  accountName: '',
  // accountStatus: undefined,
}

// type AccountStatusType = 'active' | 'inactive'

export type FormAccountType = {
  accountName: string
  // accountStatus: NonNullable<AccountStatusType | undefined>
}

export const Accounts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast({
    position: 'top-right',
    variant: 'left-accent',
    isClosable: true,
    duration: 3000,
  })

  const methods = useForm<FormAccountType>({
    defaultValues,
    resolver: accountResolver,
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

  const onSubmit = async (values: FormAccountType) => {
    try {
      const { key } = await writeAccountData(values)
      if (key) {
        return toast({
          title: 'Conta cadastrada com sucesso.',
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
      <MenuItem onClick={onOpen}>Nova conta</MenuItem>
      <FormProvider {...methods}>
        {variant ? (
          <WrapperDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Cadastrar conta"
            contentBody={<AccountForm />}
            contentFooter={<AccountFormButton />}
          />
        ) : (
          <WrapperModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            title="Cadastrar conta"
            contentBody={<AccountForm />}
            contentFooter={<AccountFormButton />}
          />
        )}
      </FormProvider>
    </>
  )
}
