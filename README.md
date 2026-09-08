# Site do GEGAM

Site institucional do **Grupo de Estudos em Geotecnologia, Agricultura e Meio Ambiente** –
IFSULDEMINAS, Campus Muzambinho.

Feito com [Astro](https://astro.build) + Tailwind CSS. Sem banco de dados: todo o
conteúdo vive em arquivos de texto no repositório.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
```

Requer Node 20+.

## Como editar o conteúdo (para bolsistas)

Você não precisa saber programar. Tudo é editável em três lugares:

### 1. Textos gerais, contato, coordenação, formulário

Arquivo: [`src/data/site.ts`](src/data/site.ts)

- `email`, `campusEndereco`, `instagram` — dados de contato.
- `coordenacao` — nomes e cargos da diretoria. Troque `"A definir"` pelos nomes reais.
- `linhasDePesquisa` — as frentes de estudo.
- `formularioInscricao` — **cole aqui o link do Google Forms** do processo seletivo
  (use o link de *"Enviar"* → ícone `< >` embed, ou o link normal do formulário).
  Enquanto estiver vazio (`""`), a página "Participe" mostra "inscrições fora do período".

### 2. Projetos

Pasta: [`src/content/projetos/`](src/content/projetos/)

Crie um arquivo `.md` por projeto (copie um existente como modelo). O topo entre
`---` são os dados; abaixo é o texto livre:

```markdown
---
titulo: "Nome do projeto"
responsavel: "Fulano de Tal"
linha: "Sensoriamento remoto"
status: "em andamento"   # ou: concluído | planejado
resumo: "Uma frase que aparece na listagem."
ordem: 1                 # menor número aparece primeiro
---

Texto completo do projeto aqui.
```

### 3. Produção acadêmica

Pasta: [`src/content/producao/`](src/content/producao/)

Um arquivo `.md` por publicação/TCC/resumo:

```markdown
---
titulo: "Título do trabalho"
autores: "Sobrenome, N.; Sobrenome, N."
tipo: "artigo"    # ou: TCC | resumo | apresentação | outro
ano: 2025
veiculo: "Revista ou evento"
link: "https://..."   # opcional
---
```

### Imagens

Coloque arquivos em [`public/`](public/) e referencie como `/nome-do-arquivo.png`.

## Publicação

O site é publicado na **Netlify** e atualiza sozinho a cada `git push` na branch
`main`. Configuração em [`netlify.toml`](netlify.toml).

- Editar pelo site do GitHub (botão ✏️ em qualquer arquivo) já dispara o deploy.
- URL: `https://gegam-ifmuz.netlify.app` (provisória).

## Estrutura

```
src/
  data/site.ts          → textos, contato, coordenação, link do formulário
  content/projetos/     → um .md por projeto
  content/producao/     → um .md por publicação
  pages/                → uma página por arquivo .astro
  components/            → cabeçalho, rodapé, blocos reutilizáveis
  layouts/Layout.astro  → moldura comum (head, header, footer)
  styles/global.css     → cores e fontes da identidade GEGAM
```
