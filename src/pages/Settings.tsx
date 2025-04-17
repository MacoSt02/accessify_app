import { useAuth } from "@/Hooks/useAuth";

const Settings = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Settings</div>
            {can('ViewSettings') && <div>CanViweSettings</div>}
        </div>
    );
};

export default Settings;