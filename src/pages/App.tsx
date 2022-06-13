import { Registro } from './Registro';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Inicio } from './Inicio';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Inicio/>}/>
                    <Route path="profes"> 
                        <Route index /* lista profes *//>
                        <Route path=":profe" /* compus usando el profe *//>
                    </Route>
                    <Route path="registro/:profe" element={<Registro/>}/>
                    <Route path="compus" /* compus sin devolver *//>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}