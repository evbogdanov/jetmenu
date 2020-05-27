import React, { useState } from 'react'
import { Item } from './styled'
import { produceItemsAfterClick } from './utils'

function MenuItems({ items, setItems }) {
  const [highlightedId, setHighlightedId] = useState(null)

  function handleClick(event) {
    setHighlightedId(event.target.dataset.id)
    const nextItems = produceItemsAfterClick(items, event.target.dataset.path)
    setItems(nextItems)
  }

  function renderItem(item) {
    if (item.type === 'anchor') return null

    const { id, path, title, level, areAllChildrenAnchors, shouldShowChildren, children } = item
    const hasChildren = children.length > 0

    return (
      <li key={id}>
        <Item
          isHighlighted={id === highlightedId}
          isArrowVisible={hasChildren && !areAllChildrenAnchors}
          isArrowRotated={shouldShowChildren}
          level={level}
          data-id={id}
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
