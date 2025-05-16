import { Usuarios } from "@/core/model/Usuario" 

export interface LinhaUsuarioProps {
    usuario: Usuarios
}


export default function LinhaUsuario(props:LinhaUsuarioProps){
    return (
        <div className="flex bg-zinc-900 p-4 rounded-md ">
            <div className="flex flex-col">
                <span>{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}