import { forwardRef } from 'react'

import { Input, InputProps } from '@chakra-ui/react'
import { NumberFormatBase, NumberFormatBaseProps } from 'react-number-format'

import { currencyFieldValue } from '@/helpers'

const InputProps = {
  height: { base: 14, md: 16, lg: 16 },
  bg: 'gray.100',
  border: '1px solid',
  borderColor: 'gray.300',
  px: 6,
  py: 5,
  color: 'gray.500',
  _placeholder: { color: 'gray.500' },
}

type CurrencyInputProps = NumberFormatBaseProps & InputProps

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ ...props }, ref) => {
    const format = (value: string) => currencyFieldValue(value)

    return (
      <NumberFormatBase
        {...props}
        format={format}
        getInputRef={ref}
        customInput={Input}
        {...InputProps}
      />
    )
  },
)

CurrencyInput.displayName = 'CurrencyInput'
