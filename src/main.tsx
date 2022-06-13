import {createRoot} from 'react-dom/client'
import {enableMapSet} from 'immer'
import { App } from 'pages/App'

import './index.css'
import './cssreset.css'

// MMNNN**
// *: vacio
// M: Modelo
// N: Número
// 0103800 : LENOVO N° 38
// 0201100 : CONECTAR N° 11
// 0300500 : CA N° 5

enableMapSet()


const root = createRoot(document.getElementById('root')!)
root.render(<App/>)

