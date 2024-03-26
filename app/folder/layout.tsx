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
      <Gnb isFixed={false} />
      {children}
      <Footer />
    </>
  )
}

export default FolderLayout