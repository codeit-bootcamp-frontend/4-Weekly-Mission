import './App.css';
import { Layout } from './components/Layout';
import Shared from './components/Shared/Shared';
import { LoginProvider } from './contexts/LoginContext';

function App() {
  return (
    <LoginProvider>
      <Layout>
        <Shared />
      </Layout>
    </LoginProvider>
  );
}

export default App;
