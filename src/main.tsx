import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeColor } from "./componentes/context/themeContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeColor>
      <App />
    </ThemeColor>
  </StrictMode>,
)
