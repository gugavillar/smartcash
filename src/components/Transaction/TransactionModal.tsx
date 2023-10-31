import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { TransactionForm } from './TransactionForm'
import { TransactionFormButton } from './TransactionFormButton'

import { FormTransactionType } from '.'

type TransactionModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: FormTransactionType) => void
}

export const TransactionModal = ({
  isOpen,
  onClose,
  onSubmit,
}: TransactionModalProps) => {
  const { handleSubmit } = useFormContext<FormTransactionType>()
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Cadastrar transação</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TransactionForm />
        </ModalBody>
        <ModalFooter>
          <TransactionFormButton />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
