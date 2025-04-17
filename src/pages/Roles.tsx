import { useAuth } from "@/Hooks/useAuth";

const Roles = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Roles</div>
            {can('ViewRoles') && <div>CanViweRoles</div>}
        </div>
    );
};

export default Roles;