// Configuração do banco (Supabase). Preencha com os dados do seu projeto:
// Supabase > Project Settings > API > "Project URL" e "anon public key".
// Enquanto estiver vazio, o site mostra os vídeos padrão abaixo e o admin avisa que falta configurar.
window.PORTFOLIO_CONFIG = {
  SUPABASE_URL: "https://nuwmogiicwbelhrfzmuz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51d21vZ2lpY3diZWxocmZ6bXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxMTM0MTIsImV4cCI6MjExMDY4OTQxMn0.3k-QJTraYIEZ1kQIhEevi_tTSBKF4WbrAWTD8EcZJzY",
  ADMIN_EMAIL: "alabypedro@gmail.com"
};

// Vídeos usados se o banco ainda não estiver configurado ou estiver fora do ar.
window.PORTFOLIO_FALLBACK = [
  { youtube_id: "7hfv7-aiIcQ", title: "Tentando jogar Valorant com os amigos (Parte 2)", subtitle: "Live editada pro YouTube", format: "horizontal", featured: true,  position: 1 },
  { youtube_id: "wJVxqzJ5WPo", title: "TENTANDO JOGAR VALORANT", subtitle: "Live editada pro YouTube", format: "horizontal", featured: false, position: 2 },
  { youtube_id: "EZk2InMFTOo", title: "Jogando Vavazinho (Parte 4 de 8)", subtitle: "VOD dividido em partes", format: "horizontal", featured: false, position: 3 },
  { youtube_id: "0kzje3w0i-Y", title: "Jogando Vavazinho (Parte 1 de 8)", subtitle: "VOD dividido em partes", format: "horizontal", featured: false, position: 4 },
  { youtube_id: "Uj9Tvdovr3c", title: "Sendo carregada pelo time", subtitle: "Corte vertical com avatar", format: "vertical", featured: false, position: 5 },
  { youtube_id: "6OrBmicwKIs", title: "Que mira foi essa?", subtitle: "Corte vertical com avatar", format: "vertical", featured: false, position: 6 },
  { youtube_id: "WINFbtwAL9c", title: "Eu me distraí com a conversa", subtitle: "Corte vertical com avatar", format: "vertical", featured: false, position: 7 }
];
