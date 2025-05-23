import { useAuth } from "@/Hooks/useAuth";

const Permissions = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Permissions</div>
            {can('ViewPermissions') && <div>CanViwePermissions</div>}
        </div>
    );
};

export default Permissions;