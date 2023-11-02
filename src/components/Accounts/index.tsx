import { CreateToastFnReturn, MenuItem, useDisclosure } from '@chakra-ui/react'
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

type AccountProps = {
  variant: boolean | undefined
  toast: CreateToastFnReturn
}

export const Accounts = ({ variant, toast }: AccountProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const methods = useForm<FormAccountType>({
    defaultValues,
    resolver: accountResolver,
  })

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
