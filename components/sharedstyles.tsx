import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  color: salmon;
`

export const UnselectableText = styled.p`
  user-select: none;
`

export const Icon = styled.span`
  display: inline-flex;
  background-color: currentColor;
  mask-image: url("/icons/bug.svg");
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 16px;
  width: 16px;
  height: 16px;
`
