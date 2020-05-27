import styled, { css } from 'styled-components'
import arrowImg from './assets/arrow.svg'

export const Item = styled.div`
  color: #343434;
  line-height: 19px;
  text-decoration: none;
  letter-spacing: ${({ isHighlighted }) => isHighlighted ? '-0.6' : '-0.1'}px;
  font-weight: ${({ isHighlighted = false }) => isHighlighted ? 'bold' : 'normal'};
  background-color: ${({ isHighlighted = false }) => isHighlighted ? '#f0f0f0' : 'transparent'};
  padding: 6px 10px 6px ${({ level = 0 }) => `${10 + level * 20}px`};
  display: flex;
  transition: font-weight 0.3s, background-color 0.3s;
  will-change: font-weight, background-color;

  &:hover {
    cursor: pointer;
    ${({ isHighlighted }) => !isHighlighted && css`
      text-decoration: underline;
    `}
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
