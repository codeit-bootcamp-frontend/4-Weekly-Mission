import GnbProfile from '@/components/gnb/GnbProfile';

import Gnb from '@/components/gnb/Gnb';
import Footer from '@/components/footer/Footer';

import '@/components/folder/Content.css'

const FolderLayout = ({
  children, 
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Gnb isFixed={false}><GnbProfile/></Gnb>
      {children}
      <Footer />
    </>
  )
}

export default FolderLayout