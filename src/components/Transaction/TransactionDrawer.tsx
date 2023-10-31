import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { TransactionForm } from './TransactionForm'
import { TransactionFormButton } from './TransactionFormButton'

import { FormTransactionType } from '.'

type TransactionDrawerProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: FormTransactionType) => void
}

export const TransactionDrawer = ({
  isOpen,
  onClose,
  onSubmit,
}: TransactionDrawerProps) => {
  const { handleSubmit } = useFormContext<FormTransactionType>()

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DrawerContent borderTopRadius={16}>
          <DrawerHeader>Cadastrar transação</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <TransactionForm />
          </DrawerBody>
          <DrawerFooter>
            <TransactionFormButton />
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  )
}
