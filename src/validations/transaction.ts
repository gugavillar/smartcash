import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { isValidDate, removeCurrencyFormat, transformDate } from '@/helpers'

yup.setLocale({
  mixed: { required: 'Campo obrigatório' },
})

const transactionSchema = yup.object({
  transactionName: yup.string().required(),
  transactionValue: yup
    .string()
    .transform((value) => removeCurrencyFormat(value))
    .required(),
  transactionDate: yup
    .string()
    .transform((value) => transformDate(value))
    .test('isValidDate', 'Digite uma data válida', (value) =>
      isValidDate(value),
    )
    .required(),
  transactionType: yup
    .string()
    .oneOf(['income', 'outcome'])
    .required()
    .nonNullable(),
  transactionCategory: yup.string().required(),
})

export const transactionResolver = yupResolver(transactionSchema)
