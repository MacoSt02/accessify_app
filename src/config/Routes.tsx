import { RouteObj } from '@/types/route';
import Settings from '@pages/Settings';
import Home from '@pages/Home';
import { Navigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Profile from '@pages/Profile';
import Users from '@pages/Users';
import Roles from '@pages/Roles';
import Permissions from '@pages/Permissions';
import Files from '@pages/Files';
import Logs from '@pages/Logs';

export const Routes: RouteObj[] = [
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
        icon: <Icon icon='solar:home-smile-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewHome',
    },
    {
        id: 'profile',
        path: '/profile',
        name: 'Profile',
        element: <Profile />,
        icon: <Icon icon='solar:user-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewProfile',
    },
    {
        id: 'settings',
        path: '/settings',
        name: 'Settings',
        element: <Settings />,
        icon: <Icon icon='solar:settings-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewSettings',
    },
    {
        id: 'users',
        path: '/users',
        name: 'Users',
        element: <Users />,
        icon: <Icon icon='solar:users-group-rounded-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewUsers',
    },
    {
        id: 'roles',
        path: '/roles',
        name: 'Roles',
        element: <Roles />,
        icon: <Icon icon='solar:user-id-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewRoles',
    },
    {
        id: 'permissions',
        path: '/permissions',
        name: 'Permissions',
        element: <Permissions />,
        icon: <Icon icon='solar:user-check-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewPermissions',
    },
    {
        id: 'files',
        path: '/files',
        name: 'Files',
        element: <Files />,
        icon: <Icon icon='solar:folder-with-files-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewFiles',
    },
    {
        id: 'logs',
        path: '/logs',
        name: 'Logs',
        element: <Logs />,
        icon: <Icon icon='solar:document-text-linear' width='1.3em' />,
        menu: true,
        permission: 'ViewLogs',
    },
];

export type RouteIds = (typeof Routes)[number]['id'];