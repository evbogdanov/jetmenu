import React from 'react'
import { Item } from './styled'
import { getItemAtPath } from './utils'

function MenuItems({ items }) {
  function handleClick(event) {
    const clickedItem = getItemAtPath(items, event.target.dataset.path)
    console.log({ clickedItem })
  }

  function renderItem(item) {
    if (item.type === 'anchor') return null

    const { id, path, title, shouldShowChildren, children } = item

    return (
      <li key={id}>
        <Item
          data-path={path}
          onClick={handleClick}
        >
          {title}
        </Item>
        {shouldShowChildren ? renderList(children) : null}
      </li>
    )
  }

  function renderList(itemsInList) {
    if (itemsInList.length === 0) return null
    return <ul>{itemsInList.map(renderItem)}</ul>
  }

  return renderList(items)
}

export default MenuItems
