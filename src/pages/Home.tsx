import { useAuth } from "@/Hooks/useAuth";

const Home = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Home</div>
            {can('ViewHome') && <div>CanViweHome</div>}
        </div>
    );
};

export default Home;