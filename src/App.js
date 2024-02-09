import React from 'react';
import Top from './Top';
import Frame from './Frame';
import Footer from './components/Footer';
import './App.css';
import Gnb from './components/Gnb';

const App = () => {
  return (
    <div className='container'>
        <Gnb className="gnb_ly"/>
        <Top className='container-top'/>
      < Frame className='container-frame'/>
      < Footer className='container-footer'/>
    </div>
  )
}

export default App;