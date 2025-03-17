import { useAuth } from "@/Hooks/useAuth";

const Users = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-4xl'>Users</div>
            {can('ViewUsers') && <div>CanViweUsers</div>}
        </div>
    );
};

export default Users;