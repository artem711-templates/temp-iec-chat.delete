import { IFormData, IStage } from './typings'

export const stages = (values: IFormData): Array<IStage> => [
  {
    content: {
      buttonText: 'Continue',
      unique: [
        {
          type: 'theme',
          placeholder: 'Change theme',
          fieldName: 'theme',
        },
      ],
    },
    response: '',
    msgs: [
      {
        text:
          'Welcome to Investment Club Europe! We are glad to have you on board of our incredible community of investors.',
      },
      {
        text:
          'My name is ICEBOT, and I will assist you at every step of you experience. Please answer a few questions so I can tailor the app to you.',
      },
      { text: 'Please choose a theme: ' },
    ],
  },
  {
    content: {
      buttonText: 'Continue',
      unique: [
        {
          type: 'input',
          placeholder: 'First name',
          fieldName: 'firstName',
        },
        {
          type: 'input',
          placeholder: 'Last name',
          fieldName: 'lastName',
        },
      ],
    },
    response: '',
    msgs: [
      {
        text:
          'Great, you will be able to customise your experience further, later in the settings.',
      },
      {
        text: 'What is your full name?',
        subtext:
          'The government requires us to collect this data, so no nicknames, even if they are really cool.',
      },
    ],
  },
  {
    content: {
      buttonText: 'Continue',
      unique: [
        {
          type: 'selector',
          placeholder: 'I am not a US citizen',
          fieldName: 'isNotUSCitizen',
        },
        {
          type: 'selector',
          placeholder: 'I have read and accept the Terms of Use',
          fieldName: 'isReadTermsOfUse',
        },
        {
          type: 'selector',
          placeholder:
            'I have read and accept the Privacy Policy, thus agreeing that my personal data will be processed by ICE',
          fieldName: 'isReadPrivacyPolicy',
        },
      ],
    },
    response: '',
    msgs: [
      { text: `Nice to meet you ${values.firstName}` },
      {
        text: 'Please read and accept our Terms of Use and Privacy Policy.',
      },
    ],
  },
  {
    content: {
      buttonText: 'Continue',
      unique: [
        {
          type: 'phone',
          placeholder: 'Change',
          fieldName: 'phoneNum',
        },
      ],
    },
    response: '',
    msgs: [
      { text: 'Great!' },
      {
        text:
          'Now I need to verify your phone number, to make sure your account is secured.',
      },
    ],
  },
  {
    content: {
      buttonText: 'Use Face ID',
      unique: [
        {
          type: 'underselector',
          placeholder: "Don't allow Face ID",
          fieldName: 'allowFaceId',
        },
      ],
    },
    response: '',
    msgs: [{ text: 'Do you want to log in quickly and securely?' }],
  },
  {
    content: {
      buttonText: 'Send me notifications',
      unique: [
        {
          type: 'underselector',
          placeholder: "Dont't allow notifications",
          fieldName: 'allowNotifications',
        },
      ],
    },
    response: '',
    msgs: [
      {
        text:
          'Do you mind if I send you notification so you can receive the most important updates and track your performance?',
      },
    ],
  },
]
