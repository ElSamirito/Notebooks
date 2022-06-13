import { FormEvent, useCallback, useState } from "react"
import { useImmer } from "use-immer"
import Compus from 'data/Compus.json'

export function Registro() {
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