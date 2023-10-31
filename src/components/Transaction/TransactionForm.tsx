import { Flex } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import { CurrencyInput, FieldContainer, Input, MaskedInput } from '@/components'

import { TransactionRadioButton } from './TransactionRadioButton'

import { FormTransactionType } from '.'

export const TransactionForm = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTransactionType>()

  return (
    <Flex flexDirection="column" width="full" gap={4}>
      <FieldContainer
        isInvalid={!!errors?.transactionName?.message}
        errorMessage={errors?.transactionName?.message}
      >
        <Input placeholder="Nome" {...register('transactionName')} />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.transactionValue?.message}
        errorMessage={errors?.transactionValue?.message}
      >
        <CurrencyInput placeholder="Valor" {...register('transactionValue')} />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.transactionDate?.message}
        errorMessage={errors?.transactionDate?.message}
      >
        <MaskedInput
          format="##/##/####"
          placeholder="Data"
          {...register('transactionDate')}
        />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.transactionType?.message}
        errorMessage={errors?.transactionType?.message}
      >
        <TransactionRadioButton name="transactionType" control={control} />
      </FieldContainer>
      <FieldContainer
        isInvalid={!!errors?.transactionCategory?.message}
        errorMessage={errors?.transactionValue?.message}
      >
        <Input placeholder="Categoria" {...register('transactionCategory')} />
      </FieldContainer>
    </Flex>
  )
}
