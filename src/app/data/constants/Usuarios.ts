import { Usuario } from "@/generated/prisma";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "ana@empresa.com.br",
        nome: "Ana",
        senha: "123456"
    },
    {
        id: "2",
        email: "joao@empresa.com.br",
        nome: "João Batista",
        senha: "123456"
    },
    {
        id: "3",
        email: "anderson@empresa.com.br",
        nome: "Anderson Ventura",
        senha: "123456@"
    },
    {
        id: "4",
        email: "emilly@empresa.com.br",
        nome: "Emilly",
        senha: "123456#@!"
    },
    {
        id: "5",
        email: "beatriz@empresa.com.br",
        nome: "Beatriz Oliveira",
        senha: "123456789"
    },
    {
        id: "6",
        email: "guilherme@empresa.com.br",
        nome: "Guilherme",
        senha: "123456789010"
    }
];

export default usuarios;