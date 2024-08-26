// channels.js

const channels = {
  TODOS: [], // Será preenchido automaticamente no App.js

  "LISTA DE FAVORITOS": [], // Inicialmente vazia, o usuário pode adicionar canais aqui

  "TOP & NOVO": [
    {
      id: 301,
      name: "Canal de Lançamentos",
      link: "https://example.com/lancamentos.m3u8",
    },
    { id: 302, name: "Top Hits", link: "https://example.com/top_hits.m3u8" },
    {
      id: 303,
      name: "Novidades da Semana",
      link: "https://example.com/novidades.m3u8",
    },
  ],

  UHD: [
    {
      id: 38,
      name: "DISCOVERY UHD",
      link: "https://example.com/discoveryuhd.m3u8",
    },
    {
      id: 401,
      name: "National Geographic UHD",
      link: "https://example.com/natgeo_uhd.m3u8",
    },
    {
      id: 402,
      name: "BBC Earth UHD",
      link: "https://example.com/bbcearth_uhd.m3u8",
    },
  ],

  "NOTÍCIAS COVID-19": [
    { id: 13, name: "BAND NEWS HD", link: "https://example.com/bandnews.m3u8" },
    { id: 17, name: "BBC", link: "https://example.com/bbc.m3u8" },
    { id: 18, name: "BLOOMBERG", link: "https://example.com/bloomberg.m3u8" },
    { id: 26, name: "CNN BRASIL", link: "https://example.com/cnnbrasil.m3u8" },
    {
      id: 27,
      name: "CNN ESPANOL",
      link: "https://example.com/cnnespanol.m3u8",
    },
    {
      id: 28,
      name: "CNN INTERNATIONAL",
      link: "https://example.com/cnninternational.m3u8",
    },
    { id: 35, name: "DIGI 24", link: "https://example.com/digi24.m3u8" },
  ],

  ESPORTE: [
    { id: 101, name: "ESPN Brasil", link: "https://example.com/espn.m3u8" },
    { id: 102, name: "SporTV", link: "https://example.com/sportv.m3u8" },
    { id: 103, name: "Fox Sports", link: "https://example.com/foxsports.m3u8" },
    { id: 104, name: "Premiere", link: "https://example.com/premiere.m3u8" },
  ],

  "FILMES & SÉRIES": [
    { id: 201, name: "HBO", link: "https://example.com/hbo.m3u8" },
    {
      id: 202,
      name: "Netflix Channel",
      link: "https://example.com/netflix.m3u8",
    },
    { id: 203, name: "Telecine", link: "https://example.com/telecine.m3u8" },
    {
      id: 204,
      name: "Paramount Channel",
      link: "https://example.com/paramount.m3u8",
    },
  ],

  ABERTOS: [
    { id: 501, name: "TV Globo", link: "https://example.com/globo.m3u8" },
    { id: 502, name: "SBT", link: "https://example.com/sbt.m3u8" },
    { id: 503, name: "Record", link: "https://example.com/record.m3u8" },
    { id: 504, name: "RedeTV", link: "https://example.com/redetv.m3u8" },
  ],
};

export default channels;
