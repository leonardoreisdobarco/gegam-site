# Notas da sessão — criação do site do GEGAM

Data: 2026-09-08

## Decisões (entrevista grill-me)

| Tema | Decisão |
|---|---|
| O que é o site | Vitrine pública + gestão leve (fase 1). Painel interno com login = fase 2 (adiado) |
| Objetivo (3 meses) | Divulgação + captação de membros (processo seletivo) |
| Públicos | Externo (visitantes/candidatos); interno no futuro |
| Stack | Astro + Tailwind v4, conteúdo em markdown |
| Dados | Arquivos no repositório; sem banco, sem autenticação |
| Formulário "Participe" | Google Forms embedado (migrar p/ Netlify Forms na fase 2) |
| Idioma | Só PT-BR |
| Tema visual | Fundo escuro, acento verde, texto branco. Logos em `OneDrive\Documentos\LOGO_GEGAM` |
| Código | github.com/leonardoreisdobarco/gegam-site |
| Deploy | Netlify, build automático no push (`netlify.toml`) |
| Local | `C:\Users\leore\Projetos\gegam-site` |
| Domínio | `gegam-ifmuz.netlify.app` (provisório) |
| Deadline | Nenhum |

## O que foi construído

- Projeto Astro + Tailwind, tema escuro/verde/branco, logo no header e favicon.
- 7 páginas: Início, Sobre, Linhas de pesquisa, Projetos, Produção, Participe, Contato + 404.
- Coleções markdown: `src/content/projetos/` e `src/content/producao/` (com exemplos).
- Textos centrais em `src/data/site.ts`.
- Página "Participe": mostra "inscrições fora do período" até preencher `formularioInscricao`.
- README com instruções para bolsistas editarem sem programar.
- Responsivo (menu hambúrguer no mobile).

## Histórico técnico

- Repo no GitHub tinha só o README; resolvido com `git fetch` + `git rebase origin/main` + `git push`.
- Deploy inicial deu 404 da Netlify porque o código ainda não tinha sido enviado ao GitHub.
- Após o push, o deploy passou a funcionar.

## Pendências (conteúdo real — usuário vai enviar)

- [ ] `src/data/site.ts`: e-mail oficial, `campusEndereco`, `coordenacao` (diretoria 2026/27), link do Google Forms em `formularioInscricao`
- [ ] `src/content/projetos/`: projetos reais (apagar os exemplos)
- [ ] `src/content/producao/`: publicações, TCCs, resumos reais (apagar o exemplo)
- [ ] Texto "sobre" oficial (histórico e objetivos do grupo) em `src/pages/sobre.astro`
- [ ] Parcerias em `src/pages/sobre.astro`
- [ ] Avaliar domínio `gegam.ifsuldeminas.edu.br` com a TI do campus

## Fluxo de atualização

Editar arquivo → `git push` (ou botão ✏️ no GitHub) → Netlify republica sozinha em ~1 min.
