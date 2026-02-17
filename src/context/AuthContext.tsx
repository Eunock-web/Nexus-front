import Cookies from 'js-cookie';
import { createContext, type ReactNode, useState, useEffect, useMemo, useCallback } from "react";
import { type AuthContextType, type User } from "../types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const TOKEN_KEY = 'refreshToken';
    const [user, setUser] = useState<User | null>(null);
    const [tempEmail, setTempEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const initAuth = () => {
            const storedUser = localStorage.getItem('user');
            const accessToken = localStorage.getItem('accessToken');

            if (storedUser && accessToken) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error("Failed to parse user from local storage", error);
                    localStorage.removeItem('user');
                    localStorage.removeItem('accessToken');
                }
            }
            setLoading(false);
        };
        initAuth();
    }, []);

    const saveSession = useCallback((accessToken: string, user: User) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setTempEmail(null);
    }, []);

    const saveToken = useCallback((token: string) => {
        Cookies.set(TOKEN_KEY, token, {
            expires: 7, // Expire dans 7 jours
            secure: true, // Uniquement en HTTPS
            sameSite: 'strict' // Protection CSRF
        });
    }, []);

    const getToken = useCallback((): string | undefined => {
        return Cookies.get(TOKEN_KEY);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        Cookies.remove(TOKEN_KEY);
        setUser(null);
    }, []);

    const values = useMemo(() => ({
        user,
        loading,
        isAuthenticated: !!user,
        tempEmail,
        setTempEmail,
        saveSession,
        saveToken,
        getToken,
        logout
    }), [user, loading, tempEmail, saveSession, saveToken, getToken, logout]);

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};