import { Routes } from '@/config/Routes';
import ToggleTheme from '@components/ToggleTheme';
import { Icon } from '@iconify/react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();

    const user = {
        email: 'admin@accessify.cat',
        role: 'Admin',
        avatar: 'https://i.pravatar.cc/40',
    };

    return (
        <main className="relative flex min-h-screen overflow-x-hidden text-primary">
            <div className="w-80 bg-background p-4 flex flex-col shadow-md border-r border-divider">
                <div className="h-16 mb-4 flex items-center justify-center">
                    <div className='flex gap-2 items-center'>
                        <Icon icon='solar:shield-user-bold-duotone' width='2.5em' height='2.5em' />
                        <h2 className="text-2xl font-bold">Accessify</h2>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 overflow-y-auto flex-grow max-h-[calc(100vh-160px)]">
                    {Routes.filter(route => route.menu).map(route => {
                        const isActive = location.pathname === route.path;
                        return (
                            <Link
                                key={route.id}
                                to={route.path}
                                className={`flex items-center text-lg p-1.5 font-medium rounded-lg transition-colors ${isActive
                                        ? 'bg-primary text-primary-900'
                                        : 'hover:bg-primary-700'
                                    }`}
                            >
                                {route.icon}
                                <span className="ml-2">{route.name}</span>
                            </Link>
                        );
                    })}
                </div>
                <ToggleTheme />
                <div className="flex items-center gap-3 p-3 mt-4 border-t border-divider">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold">{user.email}</p>
                        <p className="text-xs text-primary-300">{user.role}</p>
                    </div>
                </div>
            </div>

            <div className="flex-grow p-8 flex w-full bg-background">
                <Outlet />
            </div>
        </main>
    );
};

export default Main;


{/* <button
onClick={() => toggleTheme("light")}
className={`p-2 rounded-lg ${theme === "light" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"} transition`}
>
🌞 Light
</button> */}