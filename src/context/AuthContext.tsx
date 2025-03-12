import { createContext } from "react";

interface Permission {
    permission_name: string;
};

export interface AuthContextType {
    authenticated: boolean;
    permissions: Permission[];
    loading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);