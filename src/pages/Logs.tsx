import { useAuth } from "@/Hooks/useAuth";

const Logs = () => {
    const { can } = useAuth();
    return (
        <div>
            <div className='font-bold text-3xl'>Logs</div>
            {can('ViewLogs') && <div>CanViweLogs</div>}
        </div>
    );
};

export default Logs;