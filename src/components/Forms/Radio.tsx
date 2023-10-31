import { ReactElement, ReactNode, forwardRef } from 'react'

import {
  useRadio,
  RadioProps as ChakraRadioProps,
  Flex,
} from '@chakra-ui/react'

type RadioProps = ChakraRadioProps & {
  children: ReactNode
  icon: ReactElement
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, icon, ...props }, ref) => {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps({ ref })
    const checkbox = getRadioProps()

    return (
      <Flex as="label" width="full">
        <input {...input} />
        <Flex
          {...checkbox}
          border="1px solid"
          borderColor={props.isInvalid ? 'red.500' : 'gray.300'}
          borderRadius={5}
          width="full"
          height={{ base: 14, md: 16, lg: 16 }}
          color="gray.800"
          py={5}
          fontWeight="normal"
          bg="transparent"
          align="center"
          justify="center"
          _hover={{ bg: 'transparent' }}
          _checked={{
            bg: input.value === 'income' ? 'green.100' : 'red.100',
          }}
          gap={4}
        >
          {icon}
          {children}
        </Flex>
      </Flex>
    )
  },
)

Radio.displayName = 'Radio'
