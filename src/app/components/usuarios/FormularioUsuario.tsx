"use client"

import { useState } from "react"
import { Usuarios } from '@/core/model/Usuario'
import InputTexto from '../shared/InputTexto'

export interface FormularioUsuarioProps {
    usuario: Usuarios
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    const [usuario, setUsuario] = useState(props.usuario)

    return (
        <div className='flex flex-col gap-5'>
            <InputTexto 
                label='Nome' 
                value={usuario.nome} 
                onChange={e => setUsuario({ ...usuario, nome: e.target.value })} />
            <InputTexto 
                label='E-mail' 
                value={usuario.email} 
                onChange={e => setUsuario({ ...usuario, email: e.target.value })} />
            <InputTexto 
                label='Senha' 
                type="password" 
                value={usuario.senha} 
                onChange={e => setUsuario({ ...usuario, senha: e.target.value })} />
            <div className='flex gap-5'>
                <button className="bg-blue-500 px-4 py-2 rounded-md">Salvar</button>
                <button className="bg-zinc-500 px-4 py-2 rounded-md">Cancelar</button>
            </div>
        </div>
    )
}