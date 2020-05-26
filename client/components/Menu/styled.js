import styled from 'styled-components'
import itemsPlaceholderImg from './assets/menu-items-placeholder.svg'

const navBorder = '1px solid #e6e6e6'

export const Nav = styled.nav`
  width: 300px;
  background-color: #fafafa;
  border-right: ${navBorder};
  border-left: ${navBorder};
  padding-top: 30px;
`

export const MenuItemsPlaceholder = styled.div`
  margin-left: 15px;
  width: 224px;
  height: 209px;
  background-image: url('${itemsPlaceholderImg}');
  background-repeat: space;
`
