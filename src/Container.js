import Header from './Header';
import Nav from './Nav';
import './style.css';

const Container =() => {
  return (
    <div className='container'>
      <Header />
      <Nav />
      {/* <CardList />
      <Footer /> */}
    </div>
  )
}

export default Container;