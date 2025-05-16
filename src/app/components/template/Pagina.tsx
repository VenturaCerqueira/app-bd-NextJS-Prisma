import Menu from './Menu'
import { ReactNode } from 'react';

export interface PaginaProps {
    children: ReactNode
}
export default function Pagina(props: PaginaProps){
    return (
    <div className='flex'>
        <Menu/>
        <main className="flex-1 p-7">{props.children}</main>
    </div>
    )
}
