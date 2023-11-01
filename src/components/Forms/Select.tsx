import { forwardRef } from 'react'

import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'

type SelectProps = ChakraSelectProps & {
  options: Array<{
    value: string | number
    label: string | number
  }>
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => {
    return (
      <ChakraSelect
        height={{ base: 14, md: 16, lg: 16 }}
        bg="gray.100"
        border="1px solid"
        borderColor="gray.300"
        ref={ref}
        color="gray.500"
        _placeholder={{ color: 'gray.500' }}
        {...props}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </ChakraSelect>
    )
  },
)

Select.displayName = 'Select'
