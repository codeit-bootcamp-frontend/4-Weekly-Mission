import { useState, useEffect } from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Main } from '../Components/Main';
import { getUserData, getFolderData } from '../APIs/PageApi';
import '../styles/Page.css';



export function Page() {
  const [profile, setProfile] = useState({email:null, image:null})
  const [folder, setFolder] = useState({profileImage:null, profileName: null, folderName: null})
  const [cardLinks, setCardLinks] = useState({cardLinks: null})


  useEffect(() => {
    getData()
  }, [])


  const getData = async() => {
    const userData = await getUserData()
    const { profileImage, profileName, folderName, cardLinks } = await getFolderData()
    setProfile(userData)
    setFolder({ profileImage, profileName, folderName })
    setCardLinks(cardLinks)
  }

  return (
    <>
      <Header profile={profile} folder={folder} />
      <Main cards={cardLinks}/>
      <Footer />
    </>
  )
}