import { forwardRef } from 'react'

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

export const Input = forwardRef<HTMLInputElement, ChakraInputProps>(
  ({ ...props }, ref) => {
    return (
      <ChakraInput
        height={{ base: 14, md: 16, lg: 16 }}
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        px={6}
        py={5}
        ref={ref}
        color="gray.500"
        _placeholder={{ color: 'gray.500' }}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
