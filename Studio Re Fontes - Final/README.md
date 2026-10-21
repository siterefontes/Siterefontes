# Studio Re Fontes — site institucional

Site em React, Vite e TypeScript do Studio Re Fontes, Dublin 8, Irlanda.

## Estrutura do repositório

O projeto web fica na pasta `Studio Re Fontes - Final` do repositório `siterefontes/Siterefontes`.

- `src/App.tsx`: layout, menus, serviços e links de agendamento
- `src/index.css`: estilos e responsividade
- `src/main.tsx`: inicialização do React
- `index.html`: metadados, SEO e carregamento da aplicação
- `vite.config.ts`: configuração do Vite
- `vercel.json`: fallback de rotas para o `index.html`

## Publicação automática na Vercel

Conecte o repositório `siterefontes/Siterefontes` e configure o projeto `refontes` assim:

| Opção da Vercel | Valor |
| --- | --- |
| Production Branch | `main` |
| Framework Preset | `Vite` |
| Root Directory | `Studio Re Fontes - Final` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node.js Version | `24.x` |

**Importante:** como o código não está na raiz do repositório, não configure Root Directory como `./`. As opções acima devem ser definidas nas configurações do projeto da Vercel; `vercel.json` não configura Root Directory.

Um push na branch `main` deve iniciar o deploy de produção caso a integração Git esteja ativa.

## Rodar localmente

```bash
cd "Studio Re Fontes - Final"
npm install
npm run dev
npm run build
```

## Observações

- Os links de agendamento encaminham à página oficial do Treatwell.
- As avaliações citadas na página devem estar alinhadas com a origem Treatwell e devem ser verificadas antes de campanhas.
- A galeria inclui imagem de CDN de terceiro e link para o Instagram oficial; novas imagens do Instagram **não são baixadas automaticamente**.
- As fotografias externas podem falhar ou mudar com o tempo; hospedar cópias autorizadas no projeto torna a exibição mais previsível.
- Para builds reproduzíveis, gere e versione um `package-lock.json` compatível com o `package.json` atual quando houver acesso às dependências npm.
