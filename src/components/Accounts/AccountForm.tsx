import { Flex } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { FieldContainer, Input } from '@/components'

import { FormAccountType } from '.'

export const AccountForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormAccountType>()
  return (
    <Flex flexDirection="column" width="full" gap={4}>
      <FieldContainer
        isInvalid={!!errors?.accountName?.message}
        errorMessage={errors?.accountName?.message}
      >
        <Input placeholder="Nome" {...register('accountName')} />
      </FieldContainer>
    </Flex>
  )
}
