import Pagina from "@/app/components/template/Pagina"
import Titulo from "@/app/components/template/Titulo"
import FormularioUsuario from "@/app/components/usuarios/FormularioUsuario"
import usuarios from "@/app/data/constants/Usuarios"
import { IconUser } from "@tabler/icons-react"

export default function Page(){
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de usuários"/>
            <FormularioUsuario usuario={usuarios[0]} />
        </Pagina>
    )
}