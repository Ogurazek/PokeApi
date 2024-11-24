import { useState, useContext } from "react"
import { NavBar } from "./componentes/header/navbar"
import { Home } from "./componentes/Inicio/home"

import { ThemeContext } from "./componentes/context/themeContext";;
import { PokemonProvider } from "./componentes/context/pokemonesContext";
import styles from './appStyles.module.css'

function App() {
  const { theme } = useContext(ThemeContext);

  const [closeNavbar, setCloseNavbar] = useState(false);

  return (
    <>

      <PokemonProvider>
        <div className={`${styles.container_app} ${theme ? styles.darkTheme : styles.lightTheme}`}>
          {!closeNavbar && <NavBar />}
          <Home actualizarEstadoNavbar={setCloseNavbar} />
        </div>
      </PokemonProvider>

    </>
  )
}

export default App
