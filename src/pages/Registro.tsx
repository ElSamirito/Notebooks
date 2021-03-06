import { FormEvent, useCallback, useState } from "react"
import { useImmer } from "use-immer"
import Compus from 'data/Compus.json'
import Profes from 'data/Profes.json'
import saludos from 'data/saludos.json'
import { useLocation, useParams } from "react-router-dom"

export function Registro() {
    const [codigo, setCodigo] = useState("")
    const [saludo,] = useState(() => saludos[Math.floor(Math.random() * saludos.length)])
    const [codigos, setCodigos] = useImmer(new Set<string>());
    const a = useParams()

    const submit = useCallback((e: FormEvent) => {
        e.preventDefault()
        setCodigo("")
        
        setCodigos(c => {
            if(c.has(codigo))
                c.delete(codigo)
            else
                c.add(codigo)
        })
    }, [codigo])

    return (
        <>
            <p className="saludo">{saludo.replace('{}', Profes[a.profe as keyof typeof Profes])}</p>
            <form onSubmit={submit}>
                <input placeholder="Código" className="barcode-input" autoFocus value={codigo} onChange={e => setCodigo(e.target.value)} />
            </form>
            <ul className="notebook-list">
                {[...codigos].map(c => <li>{Compus[c as keyof typeof Compus]}</li>)}
            </ul>
        </>
    )
}