import produce from 'immer'

export function getItemAtPath(items, path) {
  const keys = path.split('->')

  let pointer = items

  for (const key of keys) {
    pointer = pointer[key]
  }

  return pointer
}

export function produceItemsAfterClick(items, pathOfClickedItem) {
  const keys = pathOfClickedItem.split('->')

  return produce(items, draft => {
    let pointer = draft

    for (const key of keys) {
      pointer = pointer[key]
    }

    if (pointer.type === 'page' && pointer.children.length > 0) {
      pointer.shouldShowChildren = !pointer.shouldShowChildren
    }
  })
}
