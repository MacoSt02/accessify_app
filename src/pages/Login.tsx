import React, { useState } from "react";
import serverApi from "@/fetch/config";
import { notify } from "@/utils/Notifications";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ email: 'user@accessify.cat', password: 'Claymore.18' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await serverApi.post("/login", formData);
            if (res.status === 200) {
                notify.success("Login successfully");
                navigate("/dashboard");
            } else {
                notify.error(res.data.error);
            }
        } catch (e) {
            notify.error("Error: " + e);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Inicia Sessió</h2>
                <form className="mt-4" onSubmit={login}>
                    <div className="mb-4">
                        <label className="block text-gray-400" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400" htmlFor="password">Contrasenya</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 p-2 rounded-lg font-semibold text-white mt-4"
                    >
                        Inicia Sessió
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;