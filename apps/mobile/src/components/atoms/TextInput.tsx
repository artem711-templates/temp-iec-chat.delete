// # PLUGINS IMPORTS //
import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export interface CTextInputProps {
  value: string
  onChangeText: (newText: string) => void

  disabled?: boolean
  setDisabled?: (isDisabled: boolean) => void
}

interface IProps extends CTextInputProps {}

export default function CTextInput(props: IProps) {
  return (
    <SWrapperInput
      value={props.value}
      onChangeText={props.onChangeText}
      editable={true}
    />
  )
}

//////////////////////////////////////////////////////////

const SWrapperInput = styled.TextInput<{ textColor?: string }>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.textColor || 'white'};
`
