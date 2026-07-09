import { StrictMode } from 'react' // Runs every function and effect twice to reveal bugs
import { createRoot } from 'react-dom/client'
import './styles.css'
import "leaflet/dist/leaflet.css"
import App from './App.tsx'

// The "!" (non-null assertion) tells React that a div with the id of "root" will definitely exist in the HTML
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
