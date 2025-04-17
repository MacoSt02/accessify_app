import { useAuth } from "@/Hooks/useAuth";

const Files = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Files</div>
            {can('ViewFiles') && <div>CanViweFiles</div>}
        </div>
    );
};

export default Files;