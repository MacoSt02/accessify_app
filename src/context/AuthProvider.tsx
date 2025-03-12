import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import serverApi from "@/fetch/config";

interface Permission {
    permission_name: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await serverApi.get("/auth");

                if (res.data.success) {
                    setAuthenticated(true);
                    setPermissions(res.data.data);
                } else {
                    setAuthenticated(false);
                    setPermissions([]);
                }
            } catch (error) {
                console.error("Error verificant autenticació:", error);
                setAuthenticated(false);
                setPermissions([]);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ authenticated, permissions, loading }}>
            {children}
        </AuthContext.Provider>
    );
};