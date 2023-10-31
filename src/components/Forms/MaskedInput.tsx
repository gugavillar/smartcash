import { forwardRef } from 'react'

import { Input, InputProps } from '@chakra-ui/react'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

type MaskedInputProps = PatternFormatProps & InputProps

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ format, ...props }, ref) => {
    return (
      <Input
        as={PatternFormat}
        format={format}
        getInputRef={ref}
        height={{ base: 14, md: 16, lg: 16 }}
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        px={6}
        py={5}
        color="gray.500"
        _placeholder={{ color: 'gray.500' }}
        {...props}
      />
    )
  },
)

MaskedInput.displayName = 'MaskedInput'
