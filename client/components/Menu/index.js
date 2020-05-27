import React, { useState, useEffect } from 'react'
import MenuItems from './components/MenuItems'
import {
  Nav,
  MenuItemsPlaceholder,
} from './styled'
import { DATA_ENDPOINT } from './consts'
import { transformServerDataToMenuItems } from './utils'

function Menu() {
  const [menuItems, setMenuItems] = useState([])
  const areItemsReady = menuItems.length > 0

  useEffect(() => {
    fetch(DATA_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const fetchedMenuItems = transformServerDataToMenuItems(data)
        setMenuItems(fetchedMenuItems)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <Nav>
      {areItemsReady ? (
        <MenuItems
          items={menuItems}
          setItems={setMenuItems}
        />
      ) : <MenuItemsPlaceholder />}
    </Nav>
  )
}

export default Menu
