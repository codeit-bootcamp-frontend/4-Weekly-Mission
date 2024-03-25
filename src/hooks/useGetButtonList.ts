import { useState, useEffect } from 'react'
import { ButtonListProps } from 'index.types'
import api from '../utils/api'

const useGetButttonList = () => {
  const [buttonsId, setButtonsId] = useState<(number | null)[]>([])
  //const [buttonsId, setButtonsId] = useState <ButtonListProps[] | []>([]) 
  //질문! 
  const [buttonsTitle, setButtonsTitle] = useState<(string | null)[]>([])
 
  const fetchData = async () => {
    try {
      const result = await api('users/11/folders')
      setButtonsId([
        null,
        ...result.data.map((item: ButtonListProps) => item.id),
      ])
      setButtonsTitle([
        '전체',
        ...result.data.map((item: ButtonListProps) => item.name),
      ])
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return { buttonsId, buttonsTitle }
}

export default useGetButttonList
