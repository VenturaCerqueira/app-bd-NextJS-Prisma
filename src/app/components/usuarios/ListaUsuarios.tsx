import { Usuarios } from '@/core/model/Usuario'
import usuarios from '../../data/constants/Usuarios'
import LinhaUsuario from "./LinhaUsuario";

export default function ListaUsuario() {
    return ( 
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuarios) => {
                return <LinhaUsuario key={usuario.id!} usuario={usuario} />;
            })}
        </div>
    )
}