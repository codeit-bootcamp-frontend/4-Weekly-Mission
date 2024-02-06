import { requestProfileData } from '../../api';
import Header from '../header/Header';
import './App.css';

function App() {
  requestProfileData();
  return (
   <>
      <Header />
   </>
  );
}

export default App;
