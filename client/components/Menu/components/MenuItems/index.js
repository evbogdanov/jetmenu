import React, { useState } from 'react'
import { Item } from './styled'
import { produceItemsAfterClick } from './utils'

function MenuItems({ items, setItems }) {
  const [highlightedId, setHighlightedId] = useState(null)

  function handleClick(event) {
    const nextItems = produceItemsAfterClick({
      currentItems: items,
      pathOfClickedItem: event.target.dataset.path,
      highlightedId,
    })

    setItems(nextItems)
    setHighlightedId(event.target.dataset.id)
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
