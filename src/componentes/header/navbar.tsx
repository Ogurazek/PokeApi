import styles from "./navbarStyles.module.css"
import { Search } from 'lucide-react';


export function NavBar() {
    return (

    <>
        <header className={styles.header}>
            <div className={styles.header_main}>
                <img src="/Pokeball.png" alt="" />
                    <h1><span>Poké</span>
                    <span className={styles.header_span_color_red}>dex</span></h1> 
            </div>
                <div className={styles.header_input}>
                    <div className={styles.header_icon_search}><Search color="gray" size={20}/></div>
                    <input type="text" placeholder='Buscar Pokemones...' />
                </div>
                
        </header>
    </>

        )
    
}