// # PLUGINS IMPORTS //
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// # COMPONENTS IMPORTS //
import Block from './components/Block'
import { stages } from './data'

// # EXTRA IMPORTS //
import { IFormData } from './typings'

/////////////////////////////////////////////////////////////////////////////

// @ts-ignore
const validation = yup.object().shape<IFormData>({
  theme: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNum: yup.string().required(),
  allowFaceId: yup.bool().required(),
  allowNotifications: yup.bool().required(),
  isNotUSCitizen: yup.bool(),
  isReadTermsOfUse: yup.bool().required(),
  isReadPrivacyPolicy: yup.bool().required(),
})

export default function AuthChat() {
  const [index, setIndex] = useState(1)
  const [finished, setFinished] = useState(false)

  const {
    getValues,
    errors,
    register,
    control,
    handleSubmit,
  } = useForm<IFormData>({
    resolver: yupResolver(validation),
    defaultValues: {
      theme: 'light',
    },
  })

  const values = getValues()
  const list = stages(values)

  const onProceed = () => {
    if (index < list.length) {
      setIndex((prev) => prev + 1)
    } else {
      setFinished(true)
    }
  }

  useEffect(() => {
    // Apps info
    register('firstName', { required: true, minLength: 20 })
    register('lastName', { required: true, minLength: 20 })
    register('phoneNum', { required: true })

    // Agreement
    register('isNotUSCitizen')
    register('isReadTermsOfUse', { required: true })
    register('isReadPrivacyPolicy', { required: true })

    // Credentials
    register('theme', { required: true })
    register('allowFaceId', { required: true })
    register('allowNotifications', { required: true })
  }, [register])

  return (
    <ScrollView contentContainerStyle={{ marginHorizontal: 10 }}>
      {list.slice(0, index).map((item) => (
        <Block
          data={item}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          onProceed={onProceed}
        />
      ))}
      <Text>{finished && 'finished'}</Text>
    </ScrollView>
  )
}
