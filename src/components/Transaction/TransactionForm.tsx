import { Flex } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

import {
  CurrencyInput,
  FieldContainer,
  Input,
  MaskedInput,
  Select,
} from '@/components'
import { useFinancial } from '@/hooks'

import { TransactionRadioButton } from './TransactionRadioButton'

import { FormTransactionType } from '.'

export const TransactionForm = () => {
  const { accounts } = useFinancial()

  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTransactionType>()

  return (
    <Flex flexDirection="column" width="full" gap={4}>
      <FieldContainer
        isInvalid={!!errors?.transactionAccount?.message}
        errorMessage={errors?.transactionAccount?.message}
      >
        <Select
          options={accounts}
          placeholder="Selecione a conta"
          {...register('transactionAccount')}
        />
      </FieldContainer>
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
    </Flex>
  )
}
