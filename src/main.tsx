import {createRoot} from 'react-dom/client'
import { useState, useCallback, FormEvent } from 'react'
import {enableMapSet} from 'immer'
import { useImmer } from 'use-immer'
import './index.css'
import './cssreset.css'

// **MMNNN
// *: vacio
// M: Modelo
// N: Número
// 0001038 : LENOVO N° 38
// 0002011 : CONECTAR N° 11
// 0003005 : CA N° 5

enableMapSet()

// https://prod.liveshare.vsengsaas.visualstudio.com/join?6072DF2FF72DA001F5A6301CD1515DE75CC1


var armario:Record<string, string>={
    "7798162833996" : "Lenovo 01",
    "7798298950147" : "Lenovo 48",
    "4795864667808" : "CA 01",
    "201807X05473" : "CA 15",
    "6950126122336" : "Conectar 01",
    "AA0811010109" : "Conectar 08"
}

function App() {
    const [codigo, setCodigo] = useState("")
    const [codigos, setCodigos] = useImmer(new Set<string>([
        "LENOVO-IP-35",
        "LENOVO-IP-36",
        "LENOVO-IP-37",
    ]))

    const submit = useCallback((e: FormEvent) => {
        e.preventDefault()
        setCodigo("")
        
        // const last = codigo.slice(-2)

        setCodigos(c => {
            c.add(`${codigo}`)
        })
    }, [codigo])

    return (
        <>
            <form onSubmit={submit}>
            <input className="barcode-input" value={codigo} onChange={e => setCodigo(e.target.value)} />
            </form>
            <ul className="notebook-list">
                {[...codigos].map(c => <li>{armario[c]}</li>)}
            </ul>
        </>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

