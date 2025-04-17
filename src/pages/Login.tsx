import serverApi from '@/fetch/config';
import { FetchError } from '@/fetch/Fetch';
import { useAuth } from '@/Hooks/useAuth';
import { LoginData } from '@/types/auth';
import { notify } from '@/utils/Notifications';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { checkAuth } = useAuth();
    const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await serverApi.post('/login', loginData);
            await checkAuth();
            navigate('/home');
            notify.success(res.data.message);
        } catch (error: unknown) {
            const e = error as FetchError;
            notify.error(e.message);
        };
    };

    return (
        <div className='bg-background'>
            <div className='flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
                <div className='w-full max-w-sm md:max-w-3xl rounded-xl border border-primary-700 bg-background text-foreground shadow overflow-hidden grid p-0 md:grid-cols-2'>
                    <form onSubmit={handleLogin} className='p-6 md:p-8 flex flex-col gap-6'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-2xl font-bold'>Welcome back</h1>
                            <p className='text-balance text-primary-300'>Login to your Accessify account</p>
                        </div>
                        <div className='grid gap-2'>
                            <label className='text-sm font-medium leading-none'>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={loginData.email}
                                onChange={handleChange}
                                className='flex h-9 w-full rounded-md border border-edge bg-transparent px-3 py-1 text-base shadow-xs transition-colors focus-visible:ring-1 focus-visible:ring-edge-highlight md:text-sm' placeholder='user@accessify.cat'
                            />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <label className='text-sm font-medium leading-none'>Password</label>
                                <a href='#' className='ml-auto text-sm leading-none underline-offset-4 hover:underline'>Forgot your password?</a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={loginData.password}
                                    onChange={handleChange}
                                    className='flex h-9 w-full rounded-md border border-edge bg-transparent px-3 py-1 text-base shadow-xs transition-colors focus-visible:ring-1 focus-visible:ring-edge-highlight md:text-sm pr-10'
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (<Icon icon='solar:eye-closed-line-duotone' width='1.5em' />) : (<Icon icon='solar:eye-bold-duotone' width='1.5em' />)}
                                </span>
                            </div>
                        </div>
                        <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-900 shadow hover:bg-primary/80 h-9 px-4 py-2 w-full' type='submit'>Login</button>
                        <div className='text-center text-sm'>Don't have an account? <a href='/signup' className='underline underline-offset-4'>Signup</a></div>
                    </form>
                    <div className='relative hidden md:block'>
                        <img src='../assets/placeholder.svg' alt='Image' className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale' />
                    </div>
                </div>
                <div className='text-balance text-center text-xs text-primary-300 [&_a]:underline [&_a]:underline-offset-4 [&>a:hover]:text-primary mt-6'>By clicking continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>.</div>
            </div>
        </div>
    );
};

export default Login;