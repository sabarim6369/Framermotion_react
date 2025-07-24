import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AnimatePresencework from './components/Animatepresence.jsx'
import JumpingRollingBall from './components/Rollingball.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <JumpingRollingBall/>
  </StrictMode>,
)
