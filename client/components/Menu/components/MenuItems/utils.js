export function getItemAtPath(items, path) {
  const keys = path.split('->')

  let pointer = items

  for (const key of keys) {
    pointer = pointer[key]
  }

  return pointer
}
