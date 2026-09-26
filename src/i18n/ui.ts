export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const ui = {
  pt: {
    meta: {
      title: "Pedro Bortot — Design de produto, da ideia ao no ar",
      description:
        "Designer de produto em Pato Branco (PR). Identidade visual, sites e apps — da marca ao deploy. Fundador da BMR 3D e do NozzleNote.",
    },
    nav: {
      sobre: "Sobre",
      servicos: "Serviços",
      cases: "Cases",
      projetos: "Projetos",
      skills: "Skills",
      contato: "Contato",
      openMenu: "Abrir menu",
    },
    hero: {
      location: "Pato Branco, Paraná — Brasil",
      headline: "Design de produto, da ideia ao no ar",
      subtext:
        "Identidade visual, site e app — marca, interface, código e publicação feitos pela mesma pessoa. Formado em game design, com passagem por sala de aula e gestão pública. Hoje, Assessor Executivo do CEO na ProcGroup.",
      cta: "O que eu faço",
    },
    about: {
      label: "Sobre",
      caption: "Pedro Bortot — Pato Branco, PR",
      p1: "Sou designer de produto: desenho a marca, monto a interface, escrevo o código e publico. A coisa inteira, pela mesma pessoa.",
      p2: "Formado em Design de Jogos e Entretenimento Digital pela Univali. Antes de chegar aqui passei por sala de aula, secretarias municipais, controle de qualidade de software e produção gráfica — dei aula de inglês na Fisk, de Blender e e-sports na Mk Academy, e hoje ensino impressão 3D. Ensinar é o que me obriga a entender o assunto de verdade.",
      p3: "Hoje sou Assessor Executivo do CEO da ProcGroup, onde cuido de contratos públicos e do relacionamento com prefeituras. Em paralelo toco a BMR 3D — impressão sob demanda, modelagem e digitalização — e construo o NozzleNote, meu app de manutenção para impressoras 3D, hoje em Beta.",
    },
    keyfacts: {
      years: "Anos de experiência multidisciplinar",
      teaching: "Papéis de ensino, de inglês a impressão 3D",
      parts: "Peças 3D projetadas e entregues",
      orgs: "Organizações e instituições",
    },
    services: {
      heading: "O que eu faço",
      intro:
        "Três frentes, sempre da primeira conversa até o resultado publicado ou na mão do cliente.",
      cta: "Pedir orçamento",
    },
    cases: {
      heading: "Trajetória",
      range: "2020 — Atual",
      details: "Ver detalhes",
    },
    caseDetail: {
      back: "Voltar para Trajetória",
      areas: "Áreas",
      previous: "Anterior",
      next: "Próximo",
    },
    projects: {
      heading: "Projetos",
      viewGithub: "Ver GitHub ↗",
      viewAllGithub: "Ver todos no GitHub ↗",
    },
    skills: {
      heading: "Skills & certificações",
    },
    contact: {
      label: "Contato",
      heading: "Vamos conversar sobre o próximo projeto",
      linkedin: "LinkedIn",
    },
    footer: {
      location: "Pato Branco, PR — Brasil",
    },
  },
  en: {
    meta: {
      title: "Pedro Bortot — Product design, from idea to live",
      description:
        "Product designer based in Pato Branco, Brazil. Brand identity, websites and apps — from the logo to the deploy. Founder of BMR 3D and NozzleNote.",
    },
    nav: {
      sobre: "About",
      servicos: "Services",
      cases: "Career",
      projetos: "Projects",
      skills: "Skills",
      contato: "Contact",
      openMenu: "Open menu",
    },
    hero: {
      location: "Pato Branco, Paraná — Brazil",
      headline: "Product design, from idea to live",
      subtext:
        "Brand identity, websites and apps — logo, interface, code and deploy done by the same person. Game design graduate, with a background in teaching and public sector management. Today, Executive Advisor to the CEO at ProcGroup.",
      cta: "What I do",
    },
    about: {
      label: "About",
      caption: "Pedro Bortot — Pato Branco, Brazil",
      p1: "I'm a product designer: I draw the brand, build the interface, write the code and ship it. The whole thing, by the same person.",
      p2: "A Game Design and Digital Entertainment graduate from Univali. Before this I went through the classroom, municipal government, software quality control and graphic production — I taught English at Fisk, Blender and e-sports at Mk Academy, and today I teach 3D printing. Teaching is what forces me to actually understand a subject.",
      p3: "Today I'm Executive Advisor to the CEO of ProcGroup, handling public contracts and relationships with municipal governments. In parallel I run BMR 3D — on-demand printing, modeling and 3D scanning — and I'm building NozzleNote, my 3D printer maintenance app, currently in Beta.",
    },
    keyfacts: {
      years: "Years of multidisciplinary experience",
      teaching: "Teaching roles, from English to 3D printing",
      parts: "3D parts designed and delivered",
      orgs: "Organizations and institutions",
    },
    services: {
      heading: "What I do",
      intro:
        "Three offerings, always from the first conversation to the result published or in the client's hands.",
      cta: "Request a quote",
    },
    cases: {
      heading: "Career",
      range: "2020 — Present",
      details: "View details",
    },
    caseDetail: {
      back: "Back to Career",
      areas: "Areas",
      previous: "Previous",
      next: "Next",
    },
    projects: {
      heading: "Projects",
      viewGithub: "View GitHub ↗",
      viewAllGithub: "View all on GitHub ↗",
    },
    skills: {
      heading: "Skills & certifications",
    },
    contact: {
      label: "Contact",
      heading: "Let's talk about the next project",
      linkedin: "LinkedIn",
    },
    footer: {
      location: "Pato Branco, Brazil",
    },
  },
} as const;
