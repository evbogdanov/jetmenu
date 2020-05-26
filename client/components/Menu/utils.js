function createItem({ type, id, path, data }) {
  if (type === 'anchor') {
    const anchor = data.entities.anchors[id]

    return {
      type,
      id,
      path,
      title: anchor.title,
      url: `${anchor.url || ''}${anchor.anchor}`,
      parentId: anchor.parentId,
    }
  }

  const page = data.entities.pages[id]

  const anchorIds = page.anchors || []
  const pageIds = page.pages || []
  const anchors = anchorIds.map(id => ({ id, type: 'anchor' }))
  const pages = pageIds.map(id => ({ id, type: 'page' }))
  const anchorsAndPages = [...anchors, ...pages]

  const children = anchorsAndPages.map(({ id: childId, type: childType}, childIndex) => {
    const childPath = `${path}->children->${childIndex}`
    return createItem({
      type: childType,
      id: childId,
      path: childPath,
      data,
    })
  })

  return {
    type,
    id,
    path,
    title: page.title,
    url: page.url || '',
    areAllChildrenAnchors: pages.length === 0 && anchors.length > 0,
    shouldShowChildren: false,
    children,
  }
}

export function transformServerDataToMenuItems(data) {
  return data.topLevelIds.map((topLevelId, topLevelIndex) => {
    return createItem({
      type: 'page',
      id: topLevelId,
      path: topLevelIndex.toString(),
      data,
    })
  })
}
