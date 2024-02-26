import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Profile from './components/Profile';
import CardList from '../../components/CardList';
import { SAMPLE_USER_URL } from '../../constants/urls';
function Shared() {
  return (
    <>
      <Header url={SAMPLE_USER_URL} />
      <Profile />
      <CardList />
      <Footer />
    </>
  );
}
export default Shared;
