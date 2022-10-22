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
            <div style={{
                width: '100vw',
                height: '100vh',
            }}>
                <App />
            </div>
        </Provider>
    </React.StrictMode>
);