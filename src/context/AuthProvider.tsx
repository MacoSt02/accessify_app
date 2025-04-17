import { useState, useEffect, ReactNode, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import serverApi from "@/fetch/config";
import { FetchError } from "@/fetch/Fetch";
import { Permission } from "@/types/auth";
// import { notify } from "@/utils/Notifications";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [loading, setLoading] = useState(true);

    const checkAuth = useCallback(async () => {
        try {
            const res = await serverApi.get("/auth");
            if (res.data.success) {
                setAuthenticated(true);
                setPermissions(res.data.data);
            } else {
                setAuthenticated(false);
                setPermissions([]);
            }
        } catch (error: unknown) {
            const e = error as FetchError;
            if (e.status !== 401) console.error("Error verificant autenticació:", e);
            setAuthenticated(false);
            setPermissions([]);
            // notify.warning('Session expired');
        } finally {
            setLoading(false);
        }
    }, []);

    const can = (permission: string) => {
        return permissions.some(p => p.permission_name === permission);
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <AuthContext.Provider value={{ authenticated, permissions, loading, checkAuth, can }}>
            {children}
        </AuthContext.Provider>
    );
};