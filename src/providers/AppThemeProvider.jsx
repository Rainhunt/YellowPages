import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useCallback, useContext, useState } from "react";

const ThemeContext = createContext();

export default function AppThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);
    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);
    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light",
            primary: {
                light: "#FAC205",
                main: "#FAC205",
                dark: "#FAC205",
                contrastText: "#FFFFFF",
            },
            secondary: {
                light: "#FBF4AE",
                main: "#E7BB2C",
                dark: "#FFD73E",
                contrastText: "#626262",
            },
            background: {
                paper: isDark ? "#1B1C21" : "#F8E9B2",
                default: "#F8E9B2",
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a Provider");
    return context;
};