import { Button, ButtonProps } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { FormTransactionType } from '.'

type TransactionFormButtonProps = ButtonProps

export const TransactionFormButton = ({
  ...props
}: TransactionFormButtonProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<FormTransactionType>()

  return (
    <Button
      bg="green.400"
      color="white"
      width="full"
      height={{ base: 14, md: 16, lg: 16 }}
      _hover={{ bg: 'green.400', opacity: 0.7 }}
      _active={{
        bg: 'green.400',
      }}
      type="submit"
      isLoading={isSubmitting}
      {...props}
    >
      Cadastrar
    </Button>
  )
}
