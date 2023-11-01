import { ReactNode } from 'react'

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
} from '@chakra-ui/react'
import { FieldValues, useFormContext } from 'react-hook-form'

type WrapperDrawerProps<T> = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (values: T) => void
  title: string
  contentBody: ReactNode
  contentFooter: ReactNode
}

export const WrapperDrawer = <T extends FieldValues>({
  isOpen,
  onClose,
  onSubmit,
  contentBody,
  contentFooter,
  title,
}: WrapperDrawerProps<T>) => {
  const { handleSubmit } = useFormContext<T>()

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <DrawerContent borderTopRadius={16}>
          <DrawerHeader>{title}</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>{contentBody}</DrawerBody>
          <DrawerFooter>{contentFooter}</DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  )
}
