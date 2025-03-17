import { useAuth } from "@/Hooks/useAuth";

const Profile = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-4xl'>Profile</div>
            {can('ViewProfile') && <div>CanViweProfile</div>}
        </div>
    );
};

export default Profile;