import Gnb from '@/components/gnb/Gnb';
import AddLink from '@/components/addLink/AddLink';
import Footer from '@/components/footer/Footer';

const FolderPage = () => {
  return (
    <div>
      <Gnb isFixed={false}/>
      <AddLink />
      <Footer />
    </div>
  )
}

export default FolderPage
