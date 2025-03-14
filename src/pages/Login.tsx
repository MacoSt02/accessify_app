import serverApi from '@/fetch/config';
import { FetchError } from '@/fetch/Fetch';
import { useAuth } from '@/Hooks/useAuth';
import { notify } from '@/utils/Notifications';
import ToggleTheme from '@components/ToggleTheme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { checkAuth, permissions } = useAuth();
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        try {
            const res = await serverApi.post('/login', loginData);
            console.log(res);
            await checkAuth();
            console.log(permissions);
            navigate('/home');
            notify.success(res.data.message);
        } catch (error: unknown) {
            const e = error as FetchError;
            notify.error(e.message);
        };
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-background'>
            <div className='w-[30vw] rounded-2xl bg-default-100 p-6 border border-divider'>
                <h2 className='mb-6 text-3xl text-center font-bold text-foreground'>Login</h2>
                <div className='px-4 py-2'>
                    <div className='mb-2 text-foreground'>Email</div>
                    
                    <input
                        type='email'
                        name='email'
                        value={loginData.email}
                        onChange={handleChange}
                        className='w-full rounded-lg bg-default-200 text-default-900 hover:bg-default-300 min-h-10 px-3 duration-200'
                    />
                </div>
                <div className='px-4 py-2'>
                    <div className='mb-2 text-foreground'>Password</div>
                    <input
                        type='password'
                        name='password'
                        value={loginData.password}
                        onChange={handleChange}
                        className='w-full rounded-lg bg-default-200 text-default-900 hover:bg-default-300 min-h-10 px-3 duration-200'
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        className='m-4 rounded-xl font-bold text-default-50 dark:text-default-900 bg-primary px-5 py-2 hover:bg-primary-600 cursor-pointer'
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <ToggleTheme />
            </div>
        </div>
    );
};

export default Login;