import { GlobalStyled } from './GlobalStyled.styled';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from 'components/app/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@mui/material/styles';
import { materialTheme } from './helpers/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={materialTheme}>
                    <GlobalStyled />
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
