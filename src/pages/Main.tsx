// import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main className='relative flex flex-col min-h-screen bg-white dark:bg-neutral-800 overflow-x-hidden'>
            {/* <Header /> */}
            <div className='flex-grow p-8 flex w-full bg-[#f3f4f6] dark:bg-[#292a2e]'>
                <Outlet />
            </div>
        </main>
    );
};

export default Main;
