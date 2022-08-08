import './index.css';

import { GlobalStyled } from './GlobalStyled.styled';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import App from 'components/app/App';
import { PersistGate } from 'redux-persist/integration/react';
import '../node_modules/modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@mui/material/styles';
import { materialTheme } from './helpers/theme';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={materialTheme}>
                    <GlobalStyled />
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Zoom}
                    />
                    <App />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
