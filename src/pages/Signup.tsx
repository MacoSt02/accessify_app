import { Button } from '@components/Button';
import { Card, CardHeader, CardBody, CardFooter } from '@components/Card';

const Signup = () => {

    return (
        <div className='flex min-h-screen items-center justify-center bg-dark text-white'>
            <Card size='lg' isBlurred>
                <CardHeader className='flex justify-center'>
                    <h1 className='text-2xl font-bold'>Signup</h1>
                </CardHeader>
                <CardBody>
                    <input type='text' name='Name' />
                    <input type='text' name='Last Name' />
                    <input type='text' name='Email' />
                    <input type='text' name='Password' />
                    <input type='text' name='Repeat Password' />
                </CardBody>
                <CardFooter className='flex justify-center'>
                    <Button color='primary' className='font-bold bg-black'>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Signup;