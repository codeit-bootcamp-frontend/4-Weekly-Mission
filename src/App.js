import Header from './components/Header';
import Shared from './components/Shared';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <body>
      <Header className='header'/>
      <Shared className='shared'/>
      <Footer className='footer'/>
    </body>
  );
}

export default App;
