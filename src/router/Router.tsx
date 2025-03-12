import { createBrowserRouter } from 'react-router-dom';
import Signup from '@pages/Signup';
import Login from '@pages/Login';
import PrivateRoute from './PrivateRoute';
import Main from '@pages/Main';
import { Routes } from '@/config/Routes';
import NotFound from '@pages/NotFound';
import { RouterProvider } from 'react-router';
import PublicRoute from './PublicRoute';

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <PublicRoute />,
            children: [
                { path: '/signup', element: <Signup /> },
                { path: '/login', element: <Login /> },
                { path: '/not-found', element: <NotFound /> },
            ],
        },
        {
            element: <PrivateRoute />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                    children: Routes.map(r => ({
                        path: r.path,
                        element: r.element,
                    })),
                },
            ],
        },
        { path: '*', element: <NotFound /> },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;