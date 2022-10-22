import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// project imports
import App from '../containers/App';
import { store } from '../redux/store';

// assets
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* https://picsum.photos/1600/1200 */}
            <div style={{
                background: `url(/images/background.png) no-repeat center center fixed`,
                width: '100vw',
                height: '100vh',
            }}>
                <App />
            </div>
        </Provider>
    </React.StrictMode>
);