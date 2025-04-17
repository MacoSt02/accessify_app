export type Permission = {
    permission_name: string;
};

export type LoginData = {
    email: string;
    password: string;
};

export type SignupData = {
    name: string;
    email: string;
    password: string;
};

export type AuthContextType = {
    authenticated: boolean;
    permissions: Permission[];
    loading: boolean;
    checkAuth: () => Promise<void>;
    can: (permission: string) => boolean;
};