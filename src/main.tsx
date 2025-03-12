import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/App.css';
import App from './App.tsx';
import { AuthProvider } from './context/AuthProvider.tsx';

const contextClass = {
    info: 'bg-sky-200 dark:bg-sky-950 text-sky-500 dark:text-sky-500',
    success: 'bg-green-200 dark:bg-green-950 text-green-500 dark:text-green-500',
    warning: 'bg-amber-200 dark:bg-amber-950 text-amber-500 dark:text-amber-500',
    error: 'bg-rose-200 dark:bg-rose-950 text-rose-500 dark:text-rose-500',
    default: 'bg-neutral-200 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-500',
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <App />
            <ToastContainer toastClassName={context => contextClass[context?.type || 'default'] + ' flex p-3 mb-4 min-h-10 min-w-70 rounded-lg overflow-hidden cursor-pointer text-sm'} theme='colored' closeButton={false} hideProgressBar limit={2} autoClose={5000} closeOnClick />
        </AuthProvider>
    </StrictMode>,
);