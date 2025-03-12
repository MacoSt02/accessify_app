import { RouteObj } from '@/types/route';
import Configuration from '@pages/Configuration';
import Home from '@pages/Home';
import { Navigate } from 'react-router-dom';

export const Routes = [
    {
        id: '_home',
        path: '/',
        name: 'Home',
        element: <Navigate to="/home" replace />,
        menu: false,
    },
    {
        id: 'home',
        path: '/home',
        name: 'Home',
        element: <Home />,
        icon: <span className="icon-[solar--home-smile-bold-duotone]"></span>,
        menu: true,
    },
    {
        id: 'configuration',
        path: '/configuration',
        name: 'Configuration',
        element: <Configuration />,
        icon: <span className="icon-[solar--home-smile-bold-duotone]"></span>,
        menu: true,
    },
] as const satisfies RouteObj[];

export type RouteIds = (typeof Routes)[number]['id'];