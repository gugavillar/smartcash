import { HStack, useRadioGroup } from '@chakra-ui/react'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { Control, useController } from 'react-hook-form'

import { Radio } from '@/components'

import { FormTransactionType } from '.'

const options = [
  {
    value: 'income',
    label: 'Entrada',
    icon: <ArrowCircleUp size={24} color="green" />,
  },
  {
    value: 'outcome',
    label: 'Saída',
    icon: <ArrowCircleDown size={24} color="red" />,
  },
]

type TransactionRadioButtonProps = {
  name: 'transactionType'
  control: Control<FormTransactionType>
}

export const TransactionRadioButton = ({
  control,
  name,
}: TransactionRadioButtonProps) => {
  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
  })

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  })

  return (
    <HStack {...getRootProps()} spacing={2}>
      {options.map(({ value, icon, label }) => (
        <Radio
          key={value}
          ref={field.ref}
          icon={icon}
          isInvalid={!!errors?.transactionType?.message}
          {...getRadioProps({ value })}
        >
          {label}
        </Radio>
      ))}
    </HStack>
  )
}
