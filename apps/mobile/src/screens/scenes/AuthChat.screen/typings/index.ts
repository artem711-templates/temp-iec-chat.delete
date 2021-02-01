import { theme } from '@mobile/shared'

type ITypes =
  | 'button'
  | 'input'
  | 'selector'
  | 'underselector'
  | 'theme'
  | 'phone'

export interface IField {
  type: ITypes
  placeholder: string
  fieldName: keyof IFormData
}

export type IStage = {
  content: {
    buttonText: string
    unique: Array<IField>
  }
  msgs: Array<{ text: string; subtext?: string }>
  response: string
}

export type IFormData = {
  theme: theme.ITheme
  firstName: string
  lastName: string
  phoneNum: string
  allowFaceId: boolean
  allowNotifications: boolean
  isNotUSCitizen: boolean
  isReadTermsOfUse: boolean
  isReadPrivacyPolicy: boolean
}
