import {createRoot} from 'react-dom/client'
import { useState, useCallback, FormEvent } from 'react'
import {enableMapSet} from 'immer'
import { useImmer } from 'use-immer'
import 'index.css'

enableMapSet()

// https://prod.liveshare.vsengsaas.visualstudio.com/join?6072DF2FF72DA001F5A6301CD1515DE75CC1

function App() {
    const [codigo, setCodigo] = useState("")
    const [codigos, setCodigos] = useImmer(new Set<string>())

    const submit = useCallback((e: FormEvent) => {
        e.preventDefault()
        setCodigo("")
        
        const last = codigo.slice(-2)

        setCodigos(c => {
            c.add(`Lenovo ${last}`)
        })
    }, [codigo])

    return (
        <div>
            <form onSubmit={submit}>
            <input value={codigo} onChange={e => setCodigo(e.target.value)} />
            </form>
            <ul>
                {[...codigos].map(c => <li>{c}</li>)}
            </ul>
        </div>
    )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)

