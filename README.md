# Victor & Iris — Portfólio

Portfólio em React + TypeScript focado em desenvolvimento web, experimentos com IA e construção de universos.

## Tecnologias

- React 19
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS 4

## Rodando no VS Code

Abra a pasta do projeto no VS Code e, no terminal integrado, execute:

```bash
npm install
npm run dev
```

Para verificar tipos e gerar a versão de produção:

```bash
npm run lint
npm run build
```

Para testar a versão de produção localmente:

```bash
npm run preview
```

## Estrutura

```text
src/
├── components/    # Componentes reutilizáveis
├── data/          # Dados de perfil e projetos
├── routes/        # Páginas e rotas do TanStack Router
├── main.tsx       # Entrada da aplicação
└── styles.css     # Estilos globais
public/            # Assets públicos, favicon etc.
```

## Adicionando projetos

Os projetos ficam em `src/data/projects.ts`. Use imagens reais em vez dos placeholders externos e preencha `route`, `linkProject` e `linkCode` apenas quando os destinos existirem.

> O diretório `node_modules` não deve ser versionado nem incluído em ZIPs do projeto.
