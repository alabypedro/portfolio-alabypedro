// Configuração do banco (Supabase). Preencha com os dados do seu projeto:
// Supabase > Project Settings > API > "Project URL" e "anon public key".
// Enquanto estiver vazio, o site mostra os vídeos padrão abaixo e o admin avisa que falta configurar.
window.PORTFOLIO_CONFIG = {
  SUPABASE_URL: "https://nuwmogiicwbelhrfzmuz.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51d21vZ2lpY3diZWxocmZ6bXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxMTM0MTIsImV4cCI6MjExMDY4OTQxMn0.3k-QJTraYIEZ1kQIhEevi_tTSBKF4WbrAWTD8EcZJzY",
  ADMIN_EMAIL: "alabypedro@gmail.com"
};

// Vídeos usados se o banco ainda não estiver configurado ou estiver fora do ar.
window.PORTFOLIO_FALLBACK = [];
