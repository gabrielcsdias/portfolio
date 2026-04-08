export const projects = [
  {
    id: 1,
    title: "Infinite Tic Tac Toe",
    description:
      "Jogo multiplayer inspirado no Tic Tac Toe, com uma mecânica dinâmica onde cada jogador mantém apenas 3 peças ativas no tabuleiro. Desenvolvido com React e Next.js no frontend e um backend responsável pela lógica da partida e sincronização do estado do jogo entre os jogadores.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/gabrielcsdias/infinite-tic-tac-toe-front",
    demo: "https://infinite-ttt-online.vercel.app/",
  },
  {
    id: 2,
    title: "TrackPath (WIP)",
    description:
      "Aplicação web para gerenciamento de consumo de mídia (animes, séries, filmes e livros). Desenvolvida com Next.js App Router, integra dados da Jikan API e utiliza uma API interna para normalização das respostas, além de um sistema de busca otimizado com debounce.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/gabrielcsdias/TrackPath",
    demo: "",
  },
  {
    id: 3,
    title: "SchedFlow",
    description:
      "Sistema de agendamentos online para pequenas empresas. Permite que empresas criem horários disponíveis e clientes agendem através de um link público. Inclui autenticação, painel administrativo, templates de email customizáveis e integração com Google Calendar.",
    tech: ["Next.js 16", "Supabase", "PostgreSQL", "Tailwind CSS v4", "JWT", "Nodemailer"],
    github: "",
    demo: "https://sched-flow.vercel.app/",
  },
];

export const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "node" },
  { name: "C#", icon: "csharp" },
  { name: ".NET", icon: "dotnet" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Git", icon: "git" },
];

export const socials = {
  github: "https://github.com/gabrielcsdias",
  linkedin: "https://www.linkedin.com/in/gabrielcsdias/",
  email: "mailto:gc7601700@gmail.com",
};
