import { createContext, useState, Dispatch, ReactNode, SetStateAction, useEffect } from "react"

interface ThemeContextType {
    theme: boolean;
    setTheme: Dispatch<SetStateAction<boolean>>;
}
const defaultValue: ThemeContextType = {
    theme: false,
    setTheme: () => { },
};

// 1- Crear el contexto 
export const ThemeContext = createContext<ThemeContextType>(defaultValue)

interface ThemeChildren {
    children: ReactNode;
}


// 2- Crear el componente donde vamos a tener los estados y demás... Importante: Se puede crear en otro archivo
export function ThemeColor({ children }: ThemeChildren) {
    // 1-2 / Para guardar en el LocalStorage el tema hay que hacer eso...
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])

    // 3- Tenemos que crear el Provider. 
    return (
        <>
            <ThemeContext.Provider
                value={{
                    setTheme, theme
                }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}