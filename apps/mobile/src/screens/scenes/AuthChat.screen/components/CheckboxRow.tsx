// # PLUGINS IMPORTS //
import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import { CCheckbox, typography } from '@mobile/cp/atoms'
const { Paragraph } = typography

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  text: string
  isChecked: boolean
  onPress: () => void
  isLast?: boolean
}

export default function Checkbox(props: IProps) {
  return (
    <SWrapper
      style={{
        borderBottomWidth: props.isLast ? 0 : 0.2,
        borderColor: '#252526',
        paddingBottom: 15,
        paddingTop: 15,
      }}
    >
      <Paragraph style={{ flex: 1 }}>{props.text}</Paragraph>
      <View
        style={{
          backgroundColor: '#272727',
          borderRadius: 6.4,
        }}
      >
        <CCheckbox onPress={props.onPress} isChecked={props.isChecked} />
      </View>
    </SWrapper>
  )
}

const MARGIN_HORIZ = 10
const SWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: ${MARGIN_HORIZ};
  margin-left: ${MARGIN_HORIZ};
`
