import { useEffect, useState } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.theme;

            if (storedTheme === "light" || storedTheme === "dark") {
                return storedTheme;
            }

            return "system";
        }
        return "system";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            localStorage.removeItem("theme");
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const updateThemeFromSystem = () => {
                document.documentElement.classList.toggle("dark", mediaQuery.matches);
            };
            mediaQuery.addEventListener("change", updateThemeFromSystem);
            updateThemeFromSystem();
            return () => mediaQuery.removeEventListener("change", updateThemeFromSystem);
        }
    }, [theme]);

    const toggleTheme = (mode: "light" | "dark" | "system") => {
        setTheme(mode);
    };

    return { theme, toggleTheme };
};