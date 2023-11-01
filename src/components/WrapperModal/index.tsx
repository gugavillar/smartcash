import { ReactNode } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { FieldValues, useFormContext } from 'react-hook-form'

type WrapperModalProps<T> = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: T) => void
  title: string
  contentBody: ReactNode
  contentFooter: ReactNode
}

export const WrapperModal = <T extends FieldValues>({
  isOpen,
  onClose,
  onSubmit,
  contentBody,
  contentFooter,
  title,
}: WrapperModalProps<T>) => {
  const { handleSubmit } = useFormContext<T>()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{contentBody}</ModalBody>
        <ModalFooter>{contentFooter}</ModalFooter>
      </ModalContent>
    </Modal>
  )
}
