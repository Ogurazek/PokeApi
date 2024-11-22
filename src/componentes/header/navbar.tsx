import { useContext } from "react";
import styles from "./navbarStyles.module.css"
import { Search } from 'lucide-react';
import { ThemeContext } from "../context/themeContext";
import { Moon, Sun } from 'lucide-react';


export function NavBar() {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleChangeTheme = () => {
        setTheme(!theme)
    }

    return (

        <>
            <header className={`${styles.header} ${theme ? styles.header_dark : styles.header_light}`}>
                <div className={styles.header_main}>
                    <img src="/Pokeball.png" alt="" />
                    <h1><span>Poké</span>
                        <span className={styles.header_span_color_red}>dex</span></h1>
                </div>
                <div className={styles.header_input}>
                    <div className={styles.header_icon_search}><Search color="gray" size={20} /></div>
                    <input className={styles.input_navbar} type="text" placeholder='Buscar Pokemones...' />
                </div>
                <button className={styles.header_icon_theme} onClick={handleChangeTheme}> {theme ? <Sun size={28} /> : <Moon size={28} />} </button>

            </header>
        </>

    )

}