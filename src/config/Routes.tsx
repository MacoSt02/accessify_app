import { RouteObj } from '@/types/route';
import Settings from '@pages/Settings';
import Home from '@pages/Home';
import { Navigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Profile from '@pages/Profile';
import Users from '@pages/Users';
import Roles from '@pages/Roles';
import Permissions from '@pages/Permissions';

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
        icon: <Icon icon='solar:home-smile-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
    {
        id: 'profile',
        path: '/profile',
        name: 'Profile',
        element: <Profile />,
        icon: <Icon icon='solar:user-rounded-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
    {
        id: 'settings',
        path: '/settings',
        name: 'Settings',
        element: <Settings />,
        icon: <Icon icon='solar:settings-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
    {
        id: 'users',
        path: '/users',
        name: 'Users',
        element: <Users />,
        icon: <Icon icon='solar:users-group-rounded-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
    {
        id: 'roles',
        path: '/roles',
        name: 'Roles',
        element: <Roles />,
        icon: <Icon icon='solar:user-id-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
    {
        id: 'permissions',
        path: '/permissions',
        name: 'Permissions',
        element: <Permissions />,
        icon: <Icon icon='solar:user-check-rounded-bold-duotone' width='1.5em' height='1.5em' />,
        menu: true,
    },
] as const satisfies RouteObj[];

export type RouteIds = (typeof Routes)[number]['id'];