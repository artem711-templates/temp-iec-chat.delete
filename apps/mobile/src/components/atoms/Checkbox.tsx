// # PLUGINS IMPORTS //
import React from 'react'
import { View } from 'react-native'
import { Checkbox as RNCheckbox } from 'react-native-paper'
import styled, { useTheme } from 'styled-components/native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  isChecked: boolean
  onPress: () => void
}

export default function Checkbox(props: IProps) {
  const { colors } = useTheme()

  return (
    <View
      style={{
        backgroundColor: '#272727',
        borderRadius: 6.4,
      }}
    >
      <RNCheckbox
        onPress={props.onPress}
        status={props.isChecked ? 'checked' : 'unchecked'}
        color={colors.primary}
      />
    </View>
  )
}
