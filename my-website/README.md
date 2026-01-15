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

Este projeto publica automaticamente no GitHub Pages a cada push na branch `main` usando GitHub Actions.

### Passos necessários

1. **Configurar o domínio customizado no repositório**
   - Vá em **Settings → Pages** e informe o domínio `pedrobortot.com.br`.
   - Garanta que o GitHub Pages esteja habilitado para o branch do workflow.

2. **Configurar o DNS do domínio**
   - Crie/atualize registros DNS apontando para o GitHub Pages.
   - Consulte a documentação oficial para os registros A/AAAA e CNAME corretos.

### Observações

- O arquivo `public/CNAME` é copiado automaticamente para o build, garantindo que o domínio permaneça configurado no Pages.
- O `homepage` no `package.json` está configurado para `https://pedrobortot.com.br` para que os assets funcionem corretamente no domínio raiz.
