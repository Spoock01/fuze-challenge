import { Rule } from 'antd/lib/form'

export const userNameRules: Rule[] = [
  {
    required: true,
    message: 'Please add the name of the card owner!',
  },
  {
    message: 'Name must be shorter than or equal to 40 characters!',
    min: 1,
    max: 40,
  },
  {
    message: "Numbers and special characters are not allowed!",
    pattern: /^[a-zA-Z\s]*$/
  }
]

export const cardNumberRules: Rule[] = [
  {
    required: true,
    message: 'Please add card number.',
  },
  {
    message: 'Card number must be 16 characters!',
    min: 16,
    max: 16
  },
  {
    message: "Only numbers are allowed",
    pattern: /^[0-9]*$/
  }
]
export const expirationDateRules: Rule[] = [
  {
    required: true,
    message: 'Please add expiration date.',
  },
]