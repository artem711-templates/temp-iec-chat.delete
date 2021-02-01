// # PLUGINS IMPORTS //
import React, { useState } from 'react'
import { View } from 'react-native'
import { FieldErrors, Control } from 'react-hook-form'

// # COMPONENTS IMPORTS //
import BlockField from './Field'
import Message from './MessageWrap'

// # EXTRA IMPORTS //
import { IStage } from '../typings'
import { CButton } from '@mobile/cp/atoms'
import { typography } from '@mobile/cp/atoms'
const { Paragraph } = typography

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  data: IStage
  control: Control
  errors: FieldErrors
  handleSubmit: any
  onProceed: () => void
}

export default function Block(props: IProps) {
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)

  function onSubmit(isSuccess: boolean, validatedData: any) {
    if (isSuccess) {
    } else {
      const errorExist = props.data.content.unique.some((r) =>
        Object.keys(validatedData).includes(r.fieldName)
      )

      if (!errorExist) {
        props.onProceed()
        setDisabled(true)
      }
    }
  }

  return (
    <View>
      {props.data.msgs.map((item, index) => {
        const isFirst = index === 0
        const isLast = index === props.data.msgs.length - 1
        return (
          <Message styleConfig={{ isFirst, isLast }}>
            <Paragraph color={'white'}>{item.text}</Paragraph>
            {item.subtext && (
              <Paragraph color={'gray'}>{item.subtext}</Paragraph>
            )}
          </Message>
        )
      })}
      {props.data.content.unique.map((item, index) => {
        return (
          <BlockField
            disabled={disabled}
            setDisabled={setDisabled}
            field={item}
            control={props.control}
            errors={props.errors}
            submitted={submitted}
            isLast={index + 1 === props.data.content.unique.length}
          />
        )
      })}
      <CButton
        disabled={disabled}
        text={'Continue'}
        onPress={() => {
          setSubmitted(true)
          props.handleSubmit(
            (data: any) => onSubmit(true, data),
            (errors: any) => onSubmit(false, errors)
          )()
        }}
      />
    </View>
  )
}
