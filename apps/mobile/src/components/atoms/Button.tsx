// # PLUGINS IMPORTS //
import React from 'react'
import styled from 'styled-components/native'
import { transparentize } from 'polished'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //
import { Paragraph } from './Typography'

/////////////////////////////////////////////////////////////////////////////

interface IProps {
  text: string
  onPress: () => void
  disabled?: boolean
}

export default function Button(props: IProps) {
  return (
    <SWrapper onPress={props.onPress} isDisabled={props.disabled}>
      <Paragraph color={'white'}>{props.text}</Paragraph>
    </SWrapper>
  )
}

//////////////////////////////////////////////////////////

const SWrapper = styled.TouchableOpacity<{ isDisabled?: boolean }>`
  background-color: ${(props) =>
    props.isDisabled
      ? transparentize(2, props.theme.colors.primary)
      : props.theme.colors.primary};
  height: 45;
  border-radius: 12;
  align-items: center;
  justify-content: center;
`
