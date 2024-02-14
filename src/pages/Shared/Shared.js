import './Shared.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SharedHeaderContent from '../../components/Header/SharedHeaderContent';

function Shared() {
  return (
    <div>
      <Header>
        <SharedHeaderContent />
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default Shared;
