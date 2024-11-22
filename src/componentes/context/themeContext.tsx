import { createContext, useState, Dispatch, ReactNode, SetStateAction } from "react"

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

    const [theme, setTheme] = useState(false);

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