import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

yup.setLocale({
  mixed: { required: 'Campo obrigatório' },
})

const accountSchema = yup.object({
  accountName: yup.string().required(),
  /* accountStatus: yup
    .string()
    .oneOf(['active', 'inactive'])
    .required()
    .nonNullable(), */
})

export const accountResolver = yupResolver(accountSchema)
