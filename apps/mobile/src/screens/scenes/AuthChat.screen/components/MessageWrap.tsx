// # PLUGINS IMPORTS //
import React, { ReactNode } from 'react'
import styled from 'styled-components/native'

// # COMPONENTS IMPORTS //

// # EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type IBorderConfig = {
  isFirst: boolean
  isLast: boolean
}

interface IProps {
  styleConfig?: IBorderConfig
  children: ReactNode
}

export default function MessageWrap(props: IProps) {
  return (
    <Wrapper config={props.styleConfig} background={'#1A1A1C'}>
      {props.children}
    </Wrapper>
  )
}

const BORDER_RADIUS = 14
const PADDING_HORIZ = 13
const PADDING_VERT = 10
const Wrapper = styled.View<{ background: string; config?: IBorderConfig }>`
  background-color: ${(props) => props.background};
  max-width: 208;
  border-top-right-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-top-left-radius: ${(props) =>
    props.config ? (props.config.isFirst ? BORDER_RADIUS : 0) : BORDER_RADIUS};
  border-bottom-left-radius: ${(props) =>
    props.config ? (props.config.isLast ? BORDER_RADIUS : 0) : BORDER_RADIUS};
  padding-right: ${PADDING_HORIZ};
  padding-left: ${PADDING_HORIZ};
  padding-top: ${PADDING_VERT};
  padding-bottom: ${PADDING_VERT};
  margin-bottom: 5;
`
