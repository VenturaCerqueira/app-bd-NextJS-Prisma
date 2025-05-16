import { Usuarios } from "@/core/model/Usuario" 
import Image from "next/image"

export interface LinhaUsuarioProps {
    usuario: Usuarios
}


export default function LinhaUsuario(props:LinhaUsuarioProps){
    return (
        <div className="flex bg-zinc-900 item-center gap-5 p-4 rounded-3xl">
            <Image
                src="https://api.dicebear.com/8.x/shapes/png?seed=random&size=80"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}