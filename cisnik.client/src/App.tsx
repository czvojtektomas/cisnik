import { isMobile } from 'react-device-detect';
import './App.css';

function App() {
    const deviceType = () => {
        if (isMobile)
            return showFullscreenRequest();
        return showLoginForm();
    }

    const showFullscreenRequest = () => {
        return (
            <button>
                Pøihlásit se
            </button>
        );
    }

    const showLoginForm = () => {
        return null;
    }

    return deviceType();
}

export default App;