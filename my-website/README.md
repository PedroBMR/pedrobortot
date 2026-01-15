# My Website

Quick scripts to work on the project:

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run preview` – preview the production build
- `npm run lint` – check linting issues
- `npm run format` – format source files

## Getting Started

Install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

## Deploy no GitHub Pages (custom domain)

Este projeto publica manualmente no GitHub Pages usando a branch `gh-pages` com o conteúdo estático gerado pelo build.

### Configuração do GitHub Pages

1. Vá em **Settings → Pages**.
2. Em **Build and deployment**, selecione:
   - **Source**: *Deploy from a branch*
   - **Branch**: `gh-pages`
   - **Folder**: `/(root)`
3. Em **Custom domain**, informe `pedrobortot.com.br`.

### Configurar o DNS do domínio

- Crie/atualize registros DNS apontando para o GitHub Pages.
- Consulte a documentação oficial para os registros A/AAAA e CNAME corretos.

### Como publicar manualmente no `gh-pages`

1. Gere o build localmente:

```bash
cd my-website
npm install
npm run build
```

2. Publique o conteúdo do build na branch `gh-pages`:

```bash
git subtree push --prefix my-website/build origin gh-pages
```

### Observações

- O arquivo `public/CNAME` é copiado automaticamente para o build, garantindo que o domínio permaneça configurado no Pages.
- O `homepage` no `package.json` está configurado para `https://pedrobortot.com.br` para que os assets funcionem corretamente no domínio raiz.
