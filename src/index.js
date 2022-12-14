import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer, Zoom } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';
import { materialTheme } from './helpers/theme';
import { store, persistor } from './redux/store';
import App from 'components/app/App';
import { GlobalStyled } from './GlobalStyled.styled';
import '../node_modules/modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

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
