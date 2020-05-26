import styled from 'styled-components'
import bg from './assets/menu-items-placeholder.svg'

export const Wrapper = styled.div`
  padding-left: 15px;
`

export const Part = styled.div`
  width: 224px;
  height: 97px;
  background: url('${bg}') no-repeat center center;

  & + & {
    margin-top: 15px;
  }
`
