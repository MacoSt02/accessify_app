import { notify } from "@/utils/Notifications";
import { useState } from "react";

const Signup = () => {
    const [signupData, setSignupData] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSignup = async () => {
        try {
            // const res = await serverApi.post('/signup', signupData);
            // notify.success(res.data.message);
            notify.success('Prova de notificació');
        } catch (e) {
            notify.error('Error: ' + e);
        };
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-dark">
            <div className="w-[30vw] rounded-2xl bg-[#1b1b1b] p-6 text-white shadow-md">
                <h2 className="mb-6 text-3xl text-center font-bold">Signup</h2>
                <div className="px-4 py-2">
                    <div className="mb-2">Email</div>
                    <input
                        type="email"
                        name="email"
                        value={signupData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-[#363636] hover:bg-[#494949] px-4 py-3 outline-none focus:ring-0"
                    />
                </div>
                <div className="px-4 py-2">
                    <div className="mb-2">Password</div>
                    <input
                        type="password"
                        name="password"
                        value={signupData.password}
                        onChange={handleChange}
                        className="w-full rounded-lg bg-[#363636] hover:bg-[#494949] px-4 py-3 outline-none focus:ring-0"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        className="m-4 rounded-xl bg-blue-600 px-5 py-2 hover:bg-blue-700 cursor-pointer"
                        onClick={handleSignup}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;

{/* <div className='flex min-h-screen items-center justify-center bg-dark text-white'>
    <Card size='lg' isBlurred>
        <CardHeader className='flex justify-center'>
            <h1 className='text-2xl font-bold'>Signup</h1>
        </CardHeader>
        <CardBody>
            <Input type='text' name='Name' />
        </CardBody>
        <CardFooter className='flex justify-center'>
            <Button className='font-bold' onClick={handleClick}>Submit</Button>
        </CardFooter>
    </Card>
</div> */}