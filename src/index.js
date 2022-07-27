import { GlobalStyled } from './GlobalStyled.styled';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from 'components/app/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import '../node_modules/modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyled />
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
