export const setUserStorageWithExpireTime = (key, value, seconds) => {
  const expireTime = Date.now() + seconds * 1000
  const data = {
    value: value,
    expire: expireTime,
  }

  localStorage.setItem(key, JSON.stringify(data))
}

export const getUserStorageWithExpireTime = (key) => {
  const data = localStorage.getItem(key)

  if (!data) return null

  const { expire } = JSON.parse(data)

  if (expire < Date.now()) {
    localStorage.removeItem(key)
    return null
  }

  return data
}
