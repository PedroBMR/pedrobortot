# pedrobortot.com.br

Vitrine de venda de sites. Uma página, HTML puro, sem build e sem dependência.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | a página inteira — texto, CSS e JS embutidos |
| `404.html` | quem cai num endereço que não existe (inclusive os do portfólio antigo) |
| `assets/fonts/` | as 4 fontes, auto-hospedadas — a página não chama o Google Fonts |
| `assets/prints/` | prints dos sites de cliente usados como exemplo |
| `CNAME` | domínio do Pages |
| `.nojekyll` | desliga o Jekyll do Pages |

## Publicar

Um push no `main` publica: o workflow em `.github/workflows/deploy.yml` copia os
arquivos e manda para o Pages, sem build. Para publicar sem alterar nada:

```bash
gh workflow run deploy.yml --repo PedroBMR/pedrobortot
```

## Ver local

```bash
python -m http.server 4322
```

## Histórico

O portfólio/currículo em Astro que ficava aqui até setembro de 2026 está no branch
`portfolio-astro`.
