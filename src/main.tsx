import {createRoot} from 'react-dom/client'
import { useState, useCallback, FormEvent } from 'react'
import {enableMapSet} from 'immer'
import { useImmer } from 'use-immer'
import './index.css'
import './cssreset.css'
import Compus from './Compus.json'
import Profes from './Profes.json'

// MMNNN**
// *: vacio
// M: Modelo
// N: Número
// 0103800 : LENOVO N° 38
// 0201100 : CONECTAR N° 11
// 0300500 : CA N° 5

enableMapSet()

function Registro() {
    const [codigo, setCodigo] = useState("")
    const [codigos, setCodigos] = useImmer(new Set<string>())

    const submit = useCallback((e: FormEvent) => {
        e.preventDefault()
        setCodigo("")
        
        // const last = codigo.slice(-2)

        setCodigos(c => {
            if(c.has(codigo))
                c.delete(codigo)
            else
                c.add(codigo)
        })
    }, [codigo])

    return (
        <>
            <form onSubmit={submit}>
            <input className="barcode-input" autoFocus value={codigo} onChange={e => setCodigo(e.target.value)} />
            </form>
            <ul className="notebook-list">
                {[...codigos].map(c => <li>{Compus[c as keyof typeof Compus]}</li>)}
            </ul>
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<Registro/>)

