import { useState, useEffect } from 'react'
import api from '../utils/api'

const useGetFolder = () => {
  const [ownerData, setOwnerData] = useState<{
    ownerImage: string | null
    ownerName: string | null
    folder: string | null
  }>({
    ownerImage: null,
    ownerName: null,
    folder: null,
  })

  const fetchData = async () => {
    try {
      const result = await api('sample/folder')

      setOwnerData({
        ownerImage: result?.folder?.owner?.profileImageSource,
        ownerName: result?.folder?.owner?.name,
        folder: result?.folder?.name,
      })
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ownerData
}
export default useGetFolder
