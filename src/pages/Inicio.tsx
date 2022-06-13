import { FormEvent, useCallback, useState } from "react"
import { useImmer } from "use-immer"
import profes from '../data/Profes.json'
import { useNavigate } from 'react-router-dom';

export function Inicio() {
    const [codigo, setCodigo] = useState("")
    const navigate = useNavigate();
    
    const submit = useCallback((e: FormEvent) => {
        e.preventDefault()
        setCodigo("")
        
        if(codigo in profes)
        navigate('/registro/' + codigo);
    }, [codigo])

    return (
        <>
            <h1>Ingrese su Código</h1>
            <form onSubmit={submit}>
                <input className="barcode-input" autoFocus value={codigo} onChange={e => setCodigo(e.target.value)} />
            </form>
        </>
    )
}