import { useState } from "react"
import { NavBar } from "./componentes/header/navbar"
import { Home } from "./componentes/Inicio/home"
import { ThemeColor } from "./componentes/context/themeContext";
import styles from './appStyles.module.css'

function App() {
  const [closeNavbar, setCloseNavbar] = useState(false);


  return (
    <>
      <ThemeColor>
        <div className={styles.container_app}>
          {!closeNavbar && <NavBar />}
          <Home actualizarEstadoNavbar={setCloseNavbar} />
        </div>
      </ThemeColor>
    </>
  )
}

export default App
