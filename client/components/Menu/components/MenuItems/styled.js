import styled, { css } from 'styled-components'
import arrowImg from './assets/arrow.svg'

export const Item = styled.div`
  color: #343434;
  line-height: 19px;
  letter-spacing: -0.1px;
  padding: 6px 10px 6px ${({ level = 0 }) => `${10 + level * 20}px`};
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
    margin: 8px 4px 0 0;
    background: url('${arrowImg}') no-repeat center center;
    visibility: ${({ isArrowVisible = false }) => isArrowVisible ? 'visible' : 'hidden'};
    transition: transform 0.3s;
    will-change: transform;
    ${({ isArrowRotated = false }) => isArrowRotated && css`
      transform: rotate(180deg);
    `}
  }
`
