import { createContext, type ReactNode, useState, useEffect, useMemo } from "react";
import { type AuthContextType, type User } from "../types";


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [tempEmail, setTempEmail] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const initAuth = () => {
            const storedUser = localStorage.getItem('user');
            const token = localStorage.getItem('accessToken');

            if (storedUser && token) {
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

    const saveSession = (token: string, user: User) => {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setTempEmail(null);
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setUser(null);
    }


    const values = useMemo(() => ({
        user,
        loading,
        isAuthenticated : !!user,
        tempEmail,
        setTempEmail,
        saveSession,
        logout
    }), [user, loading, tempEmail]);

    return (
        <AuthContext.Provider value= { values } >
        { children }
        </AuthContext.Provider>
    );
};