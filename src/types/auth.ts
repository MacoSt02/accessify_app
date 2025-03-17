export type Permission = {
    permission_name: string;
};

export type AuthContextType = {
    authenticated: boolean;
    permissions: Permission[];
    loading: boolean;
    checkAuth: () => Promise<void>;
    can: (permission: string) => boolean;
};