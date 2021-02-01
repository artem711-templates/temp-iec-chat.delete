import styled from 'styled-components/native'

interface ITextProps {
  color?: string
}

export const Headline = styled.Text<ITextProps>`
  color: ${(props) => props.theme.colors.text};
`
export const Title = styled.Text<ITextProps>`
  color: ${(props) => props.theme.colors.text};
`
export const Paragraph = styled.Text<ITextProps>`
  color: ${(props) => props.color || props.theme.colors.text};
`
export const Caption = styled.Text<ITextProps>`
  color: ${(props) => props.theme.colors.text};
`
