// # PLUGINS IMPORTS //
import React, { useRef } from 'react'
import { View, TextInput, Text } from 'react-native'
import { FieldErrors, Controller, Control } from 'react-hook-form'
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha'
import styled from 'styled-components/native'

// # COMPONENTS IMPORTS //
import CheckboxRow from './CheckboxRow'
import { IField } from '../typings'

// # EXTRA IMPORTS //
import { config, theme } from '@mobile/shared'
import { CButton, CTextInput } from '@mobile/cp/atoms'
import MessageWrap from './MessageWrap'
const { FIREBASE_CONFIG } = config

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  isLast?: boolean
  disabled: boolean
  setDisabled: (isDisabled: boolean) => void

  field: IField
  control: Control
  errors: FieldErrors
  submitted: boolean
}

export default function BlockField(props: IProps) {
  const isError = props.errors[props.field.fieldName] !== undefined

  return (
    <View>
      {isError && props.submitted && (
        <Text style={{ color: 'red' }}>Error occured</Text>
      )}

      <Controller
        name={props.field.fieldName}
        control={props.control}
        render={(formProps) => {
          return (
            <Body
              formProps={formProps}
              field={props.field}
              control={props.control}
              disabled={props.disabled}
              setDisabled={props.setDisabled}
            />
          )
        }}
      />
    </View>
  )
}

function Body(
  props: Omit<Omit<IProps, 'submitted'>, 'errors'> & {
    formProps: { name: string; value: any; onChange: (text: any) => void }
  }
) {
  switch (props.field.type) {
    // Input Field
    case 'input': {
      return (
        <View>
          <TextInput
            {...props.formProps}
            onChangeText={(value) => props.formProps.onChange(value)}
          />
        </View>
      )
    }

    // Buton Field
    case 'button': {
      return <CButton text={props.field.placeholder} onPress={() => {}} />
    }

    case 'phone': {
      const recaptchaVerifier = useRef<any>()

      return (
        <>
          <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={FIREBASE_CONFIG}
          />
          <MessageWrap>
            <CTextInput
              value={props.formProps.value}
              onChangeText={props.formProps.onChange}
              disabled={props.disabled}
              setDisabled={props.setDisabled}
            />
          </MessageWrap>
        </>
      )
    }

    case 'selector': {
      const isChecked = props.formProps.value === true

      return (
        <CheckboxRow
          onPress={() => props.formProps.onChange(isChecked ? false : true)}
          isChecked={isChecked}
          text={props.field.placeholder}
          isLast={props.isLast}
        />
      )
    }

    case 'theme': {
      return (
        <SThemeWrapper>
          {theme.themes.map((item) => {
            return (
              <SThemeWrap onPress={() => props.formProps.onChange(item)}>
                <SThemeBlock isValue={props.formProps.value === item} />
                <Text>{item}</Text>
              </SThemeWrap>
            )
          })}
        </SThemeWrapper>
      )
    }

    default: {
      return <View />
    }
  }
}

const MARGIN_VERT = 14
const SThemeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${MARGIN_VERT};
  margin-bottom: ${MARGIN_VERT};
`

const SThemeWrap = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`

const SThemeBlock = styled.View<{ isValue: boolean }>`
  height: 113;
  width: 70;
  background-color: #1a1a1c;
  border-radius: 12;
  margin-bottom: 10;
  border-width: ${(props) => (props.isValue ? 5 : 0)};
  border-color: #0b84fe;
`
