import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { RecoilRoot } from 'recoil';

function Main() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default Main;