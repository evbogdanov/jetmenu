import produce from 'immer'

function getItemAtPath(items, path) {
  const keys = path.split('->')

  let pointer = items

  for (const key of keys) {
    pointer = pointer[key]
  }

  return pointer
}

export function produceItemsAfterClick({
  currentItems,
  pathOfClickedItem,
  highlightedId,
}) {
  return produce(currentItems, draft => {
    const item = getItemAtPath(draft, pathOfClickedItem)

    if (
      item.type !== 'page' ||
      item.children.length === 0 ||
      (item.id !== highlightedId && item.shouldShowChildren)
    ) return

    item.shouldShowChildren = !item.shouldShowChildren
  })
}
