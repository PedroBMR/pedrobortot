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
    language: "Tauri · Rust + TS",
    url: "https://nozzlenote.com",
    variant: 2,
    description: {
      pt: "App local-first para manutenção de impressoras 3D — acompanhamento de manutenção, trocas de bico e histórico de cuidados. Em Beta.",
      en: "Local-first app for 3D printer maintenance — tracking upkeep, nozzle swaps and care history. In Beta.",
    },
  },
  {
    name: "BMR 3D",
    language: "Marca / Produto",
    url: "http://app.bmr3d.com.br/",
    variant: 1,
    description: {
      pt: "Minha empresa de impressão 3D: peças sob demanda, modelagem e digitalização. Também é o guarda-chuva do PrintQuote e do NozzleNote.",
      en: "My 3D printing company: on-demand parts, modeling and scanning. It is also the umbrella behind PrintQuote and NozzleNote.",
    },
  },
  {
    name: "ProcGroup — Site institucional",
    language: "Astro",
    url: "https://pedrobmr.github.io/procgroup-site/",
    variant: 3,
    description: {
      pt: "Site institucional da ProcGroup, em Astro. Desenvolvi com o time comercial e com apoio de IA.",
      en: "ProcGroup institutional website, built in Astro. Developed together with the sales team and with AI support.",
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
