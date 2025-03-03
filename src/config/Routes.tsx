import { RouteObj } from '@/types/route';
import Dashboard from '@pages/Dashboard';

export const Routes = [
    {
        id: 'dashboard',
        path: '/dashboard',
        name: 'Dashboard',
        element: <Dashboard />,
        icon: <span className="icon-[solar--home-smile-bold-duotone]"></span>,
        menu: 'header',
    },
] as const satisfies RouteObj[];

export type RouteIds = (typeof Routes)[number]['id'];