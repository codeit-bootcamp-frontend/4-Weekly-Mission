//server component
import GnbProfile from '@/components/gnb/GnbProfile';

import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';

const FolderLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Gnb isFixed={false}><GnbProfile/></Gnb>
      <AddLink />
      {children}
      <Footer />
    </>
  )
}

export default FolderLayout