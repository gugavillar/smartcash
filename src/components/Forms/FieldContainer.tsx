import { ReactNode } from 'react'

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
} from '@chakra-ui/react'

type FieldContainerProps = FormControlProps & {
  errorMessage?: string
  children: ReactNode
}

export const FieldContainer = ({
  children,
  errorMessage,
  ...props
}: FieldContainerProps) => {
  return (
    <FormControl {...props}>
      {children}
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
