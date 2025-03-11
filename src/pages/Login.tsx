import serverApi from "@/fetch/config";
import { FetchError } from "@/fetch/Fetch";
import { notify } from "@/utils/Notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
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
            navigate('/dashboard');
            notify.success(res.data.message);
        } catch (error: unknown) {
            const e = error as FetchError;
            notify.error(e.message);
        };
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-dark">
            <div className="w-[30vw] rounded-2xl bg-[#18181b] p-6 text-white shadow-md">
                <h2 className="mb-6 text-3xl text-center font-bold">Login</h2>
                <div className="px-4 py-2">
                    <div className="mb-2">Email</div>
                    <input
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-default-100 hover:bg-default-200 min-h-10 px-3 duration-200"
                    />
                </div>
                <div className="px-4 py-2">
                    <div className="mb-2">Password</div>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-[#27272a] hover:bg-[#3f3f46] min-h-10 px-3 duration-200"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="m-4 rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-700 cursor-pointer"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;