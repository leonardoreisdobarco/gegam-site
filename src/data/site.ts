// Dados editáveis do site. Bolsistas: alterem os valores abaixo.

export const site = {
  nome: "GEGAM",
  nomeCompleto:
    "Grupo de Estudos em Geotecnologia, Agricultura e Meio Ambiente",
  instituicao: "IFSULDEMINAS – Campus Muzambinho",
  descricaoCurta:
    "Grupo de estudos em sensoriamento remoto, agricultura digital, drones e georreferenciamento.",
  instagram: "https://www.instagram.com/gegam.ifmuz/",
  email: "gegam@ifsuldeminas.edu.br", // TODO: confirmar e-mail oficial
  campusEndereco:
    "IFSULDEMINAS – Campus Muzambinho, Estrada de Muzambinho, km 35, Bairro Morro Preto, Muzambinho/MG",
  // Cole aqui o link "compartilhar" do Google Forms do processo seletivo.
  // Enquanto vazio, a página "Participe" mostra um aviso.
  formularioInscricao: "",
};

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/linhas-de-pesquisa", label: "Linhas de pesquisa" },
  { href: "/projetos", label: "Projetos" },
  { href: "/producao", label: "Produção" },
  { href: "/participe", label: "Participe" },
  { href: "/contato", label: "Contato" },
];

export const linhasDePesquisa = [
  {
    slug: "sensoriamento-remoto",
    titulo: "Sensoriamento remoto",
    resumo:
      "Uso de imagens de satélite e índices espectrais (NDVI, NDRE) para monitorar vegetação, uso e cobertura do solo.",
  },
  {
    slug: "agricultura-digital",
    titulo: "Agricultura digital",
    resumo:
      "Agricultura de precisão, mapas de produtividade, aplicação em taxa variável e integração de dados de campo.",
  },
  {
    slug: "drones-aerolevantamento",
    titulo: "Drones e aerolevantamento",
    resumo:
      "Planejamento de voo, fotogrametria, geração de ortomosaicos e modelos digitais de superfície com VANTs.",
  },
  {
    slug: "topografia-georreferenciamento",
    titulo: "Topografia e georreferenciamento",
    resumo:
      "Levantamentos topográficos, GNSS/RTK, georreferenciamento de imóveis rurais e cadastro territorial.",
  },
];

// Diretoria / coordenação — PLACEHOLDER. Substituir pelos nomes reais de 2026/27.
export const coordenacao = [
  { nome: "A definir", cargo: "Coordenação docente" },
  { nome: "A definir", cargo: "Coordenação discente" },
  { nome: "A definir", cargo: "Secretaria" },
  { nome: "A definir", cargo: "Comunicação" },
];
