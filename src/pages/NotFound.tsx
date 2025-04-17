import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='p-8 flex w-screen h-screen bg-background'>
            <div className='flex flex-col gap-4 items-center justify-center text-center w-full h-full'>
                <h1 className='text-9xl font-bold text-primary transition-transform hover:scale-110'>404</h1>
                <p className='text-2xl text-secondary'>Page Not Found</p>
                <p className='text-md text-gray-500'>The page you are looking for does not exist.</p>
                <Link to="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-900 shadow hover:bg-primary/80 h-9 px-4 py-2">
                    <Icon icon='solar:arrow-left-line-duotone' className='text-icon-light' width='2em' height='2em' />
                    Go home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;