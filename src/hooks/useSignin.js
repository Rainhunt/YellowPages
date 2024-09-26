import { useCallback } from "react";
import { login, signup } from "../services/userApi";
import { setToken } from "../services/jwtLocal";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routerModel";
import { useState } from "react";
import { useSnack } from "../providers/LayoutProvider/SnackProvider";
import normalizeUser from "../normalization/user/normalizeUser";

export default function useSignin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    const { updateUser } = useUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleLogin = useCallback(async (loginData) => {
        setIsLoading(true);
        try {
            const token = await login(loginData);
            setToken(token);
            updateUser();
            setError(null);
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message);
            setSnack(err.message, "filled", "error");
        }
        setIsLoading(false);
    }, []);

    const handleSignup = useCallback(async (signupData) => {
        setIsLoading(true);
        try {
            const user = normalizeUser(signupData);
            const newUser = await signup(user);
            if (newUser) {
                const token = await login({ email: signupData.email, password: signupData.password });
                setToken(token);
                updateUser();
            }
            setError(null);
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message);
            setSnack(err.message, "filled", "error");
        }
        setIsLoading(false);
    }, []);

    const handleLogout = useCallback(() => {
        setToken();
        updateUser();
    });

    return { isLoading, error, handleLogin, handleSignup, handleLogout }
}