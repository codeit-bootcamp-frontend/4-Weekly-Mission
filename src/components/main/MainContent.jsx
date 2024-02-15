import MainTitle from './MainTitle';
import MainCard from './MainCard';

function MainContent() {
  return (
    <>
      <MainTitle />
      <MainCard cardNumber={1} />
      <MainCard cardNumber={2} />
      <MainCard cardNumber={3} />
      <MainCard cardNumber={4} />
    </>
  );
}

export default MainContent;
