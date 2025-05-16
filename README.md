Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

https://www.youtube.com/watch?v=mikoTbhH_Qg&ab_channel=Cod3rCursos
## Começando

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página será atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a fonte [Geist](https://vercel.com/font), uma nova família de fontes da Vercel.

## Estrutura do Projeto

- `app/` — Páginas e componentes principais da aplicação.
- `prisma/` — Arquivos de configuração e migrações do Prisma ORM.
- `public/` — Arquivos estáticos.
- `styles/` — Arquivos de estilos globais.
- `package.json` — Dependências e scripts do projeto.
- `.env` — Variáveis de ambiente (não versionadas).

## Scripts Disponíveis

- `dev` — Inicia o servidor de desenvolvimento.
- `build` — Gera a build de produção.
- `start` — Inicia o servidor em modo produção.
- `lint` — Executa o linter para verificar problemas no código.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as configurações necessárias, por exemplo:

```
DATABASE_URL="sua_string_de_conexão"
```

## Saiba Mais

Para saber mais sobre Next.js, confira:

- [Documentação do Next.js](https://nextjs.org/docs) — Saiba mais sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) — Tutorial interativo.

## Deploy na Vercel

A maneira mais fácil de fazer deploy da sua aplicação Next.js é usando a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Confira a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

> **Observação:** Lembre-se de adicionar um arquivo `.gitignore` para evitar versionar arquivos sensíveis e dependências.
