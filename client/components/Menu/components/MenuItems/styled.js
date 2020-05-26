import styled from 'styled-components'
import arrowImg from './assets/arrow.svg'

export const Item = styled.div`
  color: #343434;
  line-height: 19px;
  letter-spacing: -0.1px;
  padding: 6px 10px;
  display: flex;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &::before {
    display: block;
    content: '';
    width: 8px;
    height: 5px;
    margin: 7px 4px 0 0;
    background: url('${arrowImg}') no-repeat center center;
  }
`
