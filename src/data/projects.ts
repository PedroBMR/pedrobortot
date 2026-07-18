export interface Project {
  name: string;
  language: string;
  url: string;
  variant: number;
  description: { pt: string; en: string };
}

export const projects: Project[] = [
  {
    name: "NozzleNote",
    language: "Astro",
    url: "https://nozzlenote.com",
    variant: 2,
    description: {
      pt: "App local-first para manutenção de impressoras 3D — acompanhamento de manutenção, trocas de bico e histórico de cuidados. Em Beta.",
      en: "Local-first app for 3D printer maintenance — tracking upkeep, nozzle swaps and care history. In Beta.",
    },
  },
  {
    name: "BMR3D",
    language: "Marca / Produto",
    url: "http://app.bmr3d.com.br/",
    variant: 1,
    description: {
      pt: "Marca própria de projetos e produtos para a comunidade de impressão 3D — hub por trás do PrintQuote BMR e do NozzleNote.",
      en: "My own brand of projects and products for the 3D printing community — the hub behind PrintQuote BMR and NozzleNote.",
    },
  },
  {
    name: "ProcGroup — Site institucional",
    language: "Astro",
    url: "https://pedrobmr.github.io/procgroup-site/",
    variant: 3,
    description: {
      pt: "Site institucional que desenvolvi para a ProcGroup — projeto assumido por iniciativa própria para liberar o CEO.",
      en: "Institutional website I built for ProcGroup — a project I took on my own initiative to free up the CEO's time.",
    },
  },
  {
    name: "PrintQuote BMR",
    language: "Python",
    url: "https://github.com/PedroBMR/printquote-bmr",
    variant: 1,
    description: {
      pt: "Calculadora de custos e precificação para impressão 3D.",
      en: "Cost calculator and pricing tool for 3D printing.",
    },
  },
  {
    name: "Radar CPSI",
    language: "Python",
    url: "https://github.com/PedroBMR/radar-cpsi-proc",
    variant: 3,
    description: {
      pt: "Radar nacional de oportunidades relacionadas a videomonitoramento e câmeras.",
      en: "Nationwide radar for opportunities related to video monitoring and cameras.",
    },
  },
  {
    name: "Neon Forge",
    language: "C++",
    url: "https://github.com/PedroBMR/Neon-Forge",
    variant: 0,
    description: {
      pt: "Projeto de jogo desenvolvido em C++.",
      en: "Game project built in C++.",
    },
  },
];
