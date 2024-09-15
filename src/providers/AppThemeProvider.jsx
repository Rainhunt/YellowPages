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
                light: "#FFFFFF",
                main: "#FFFFFF",
                dark: "#FFFFFF",
                contrastText: "#000000",
            },
            secondary: {
                light: "#E7BB2C",
                main: "#E7BB2C",
                dark: "#E7BB2C",
                contrastText: "#FFFFFF",
            }
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