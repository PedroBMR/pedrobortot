# Bug Report — Portfolio QA (templates + exemplos)

## Template
**Bug ID:** BUG-XXX  
**Título:** _Resumo objetivo do problema_  
**Ambiente:** _SO, navegador, versão_  
**Severidade:** _Baixa/Média/Alta_  
**Prioridade:** _Baixa/Média/Alta_  
**Passos para reproduzir:**  
1.  
2.  
3.  
**Resultado esperado:**  
**Resultado atual:**  
**Evidência:** _[print/GIF placeholder]_  
**Observações:** _Notas adicionais_  

---

## Exemplos (hands-on practice)

### BUG-001 — Link “Ver Projetos” não rola até a seção correta
**Ambiente:** Windows 11, Chrome 125  
**Severidade:** Média  
**Prioridade:** Média  
**Passos para reproduzir:**  
1. Acessar a página inicial  
2. Clicar no CTA “Ver Projetos” no Hero  
**Resultado esperado:** a página rola até a seção Projects.  
**Resultado atual:** a página rola parcialmente e para antes da seção.  
**Evidência:** _/qa/evidencias/bug-001.gif_  
**Observações:** validação necessária em diferentes tamanhos de tela.  

### BUG-002 — Texto em inglês não atualiza na seção About
**Ambiente:** macOS, Safari 17  
**Severidade:** Baixa  
**Prioridade:** Baixa  
**Passos para reproduzir:**  
1. Acessar a página inicial  
2. Trocar o idioma para EN  
3. Rolar até “About”  
**Resultado esperado:** a seção About exibe conteúdo em inglês.  
**Resultado atual:** o texto permanece em português.  
**Evidência:** _/qa/evidencias/bug-002.png_  
**Observações:** revisar bind do i18n na seção.  

### BUG-003 — Ícone de GitHub não possui foco visível
**Ambiente:** Ubuntu 22.04, Firefox 124  
**Severidade:** Baixa  
**Prioridade:** Baixa  
**Passos para reproduzir:**  
1. Acessar a página inicial  
2. Usar teclado (Tab) até o ícone do GitHub  
**Resultado esperado:** foco visível no ícone.  
**Resultado atual:** não há indicação visual de foco.  
**Evidência:** _/qa/evidencias/bug-003.png_  
**Observações:** melhora de acessibilidade básica.  
