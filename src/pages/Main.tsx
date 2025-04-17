import { Routes } from '@/config/Routes';
import serverApi from '@/fetch/config';
import { FetchError } from '@/fetch/Fetch';
import { useAuth } from '@/Hooks/useAuth';
import { notify } from '@/utils/Notifications';
import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const { can, checkAuth } = useAuth();

    const handleLogout = async () => {
        try {
            const res = await serverApi.post('/logout');
            await checkAuth();
            notify.success(res.data.message);
        } catch (error: unknown) {
            const e = error as FetchError;
            notify.error(e.message);
        };
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth, location.pathname]);

    return (
        <main className='relative flex h-screen overflow-x-hidden text-primary'>
            <div className='absolute group w-18 h-full p-2 hover:w-72 transition-all duration-300'>
                <div className='flex flex-col h-full p-2 gap-2 bg-sidebar border border-edge rounded-lg shadow'>
                    <div className='flex items-center rounded-md p-1 mb-4 hover:cursor-pointer hover:bg-hover-link'>
                        <div className='w-10 hover:w-6'>
                            <img src='../../public/assets/icon.svg' alt='Accessify' className='min-w-7 max-h-7' />
                        </div>
                        <h2 className='text-2xl font-bold text-nowrap overflow-hidden max-w-0 group-hover:max-w-[10rem] transition-all duration-300'>Accessify</h2>
                    </div>
                    <nav className='flex-grow h-full overflow-scroll'>
                        <ul className='flex flex-col gap-2'>
                            {Routes.filter(route => route.menu && (!route.permission || can(route.permission))).map(route => {
                                const isActive = location.pathname === route.path;
                                return (
                                    <li key={route.id}>
                                        <Link
                                            to={route.path}
                                            className={`flex items-center text-md p-2 font-medium rounded-lg transition-colors hover:bg-primary-800 hover:text-primary ${isActive ? 'bg-primary-800 text-primary' : 'text-primary-200'
                                                }`}
                                        >
                                            <div className='w-10'>
                                                {route.icon}
                                            </div>
                                            <span className='-ml-2 text-nowrap overflow-hidden max-w-0 group-hover:max-w-[10rem] transition-all duration-300'>{route.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div>
                        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-900 shadow hover:bg-primary/80 h-9 px-4 py-2 w-full' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-grow p-8 pl-20 flex w-full bg-background'>
                <Outlet />
            </div>
        </main>
    );
};

export default Main;