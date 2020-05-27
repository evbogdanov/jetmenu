import React, { useState } from 'react'
import { Item } from './styled'
import { produceItemsAfterClick } from './utils'

function MenuItems({ items, setItems }) {
  const [highlightedId, setHighlightedId] = useState(null)
  const [highlightedAnchorId, setHighlightedAnchorId] = useState(null)

  function handlePageItemClick(event) {
    const nextItems = produceItemsAfterClick({
      currentItems: items,
      pathOfClickedItem: event.target.dataset.path,
      highlightedId,
    })

    setItems(nextItems)
    setHighlightedId(event.target.dataset.id)
    setHighlightedAnchorId(null)
  }

  function handleAnchorItemClick(event) {
    setHighlightedAnchorId(event.target.dataset.id)
  }

  function renderAnchorItem({ parentId, id, level, title }) {
    if (parentId !== highlightedId) return null

    return (
      <li key={id}>
        <Item
          isAnchor
          isHighlighted={id === highlightedAnchorId}
          level={level}
          data-id={id}
          onClick={handleAnchorItemClick}
        >
          {title}
        </Item>
      </li>
    )
  }

  function renderPageItem({
    id,
    path,
    title,
    level,
    areAllChildrenAnchors,
    shouldShowChildren,
    children
  }) {
    const hasChildren = children.length > 0

    return (
      <li key={id}>
        <Item
          isHighlighted={id === highlightedId}
          isArrowVisible={hasChildren && (!areAllChildrenAnchors || id === highlightedId)}
          isArrowRotated={shouldShowChildren}
          level={level}
          data-id={id}
          data-path={path}
          onClick={handlePageItemClick}
        >
          {title}
        </Item>
        {shouldShowChildren ? renderList(children) : null}
      </li>
    )
  }

  function renderItem(item) {
    const renderFun = item.type === 'anchor' ? renderAnchorItem : renderPageItem
    return renderFun(item)
  }

  function renderList(itemsInList) {
    if (itemsInList.length === 0) return null
    return <ul>{itemsInList.map(renderItem)}</ul>
  }

  return renderList(items)
}

export default MenuItems
