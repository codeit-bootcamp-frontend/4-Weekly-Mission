import { useState, useEffect } from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Main } from '../Components/Main';
import { getUserData } from '../APIs/PageApi';
import '../styles/Page.css';
import { useFolder } from './useFolder';



export function Page() {
  const [profile, setProfile] = useState({email:null, image:null})

  useEffect(() => {
    getData()
  }, [])

  const {cardLinks, folder} = useFolder()

  const getData = async() => {
    const userData = await getUserData()
    setProfile(userData)
  }

  return (
    <>
      <Header profile={profile} folder={folder} />
      <Main cards={cardLinks}/>
      <Footer />
    </>
  )
}