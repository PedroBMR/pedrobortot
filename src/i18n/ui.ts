export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const ui = {
  pt: {
    meta: {
      title: "Pedro Bortot — Assessor Executivo, Produto & Inovação",
      description:
        "Assessor Executivo na ProcGroup e fundador do NozzleNote e da BMR3D — perfil multidisciplinar entre gestão pública, produto e inovação.",
    },
    nav: {
      sobre: "Sobre",
      cases: "Cases",
      projetos: "Projetos",
      skills: "Skills",
      contato: "Contato",
      openMenu: "Abrir menu",
    },
    hero: {
      location: "Pato Branco, Paraná — Brasil",
      headline: "Gestão pública, produto e inovação num só perfil",
      subtext:
        "Assessoria executiva, gestão de contratos públicos e produtos próprios (NozzleNote, BMR3D) — transitando entre o setor público e o privado.",
      cta: "Ver trajetória",
    },
    about: {
      label: "Sobre",
      caption: "Pedro Bortot — Pato Branco, PR",
      p1: "Formado em Design de Jogos e Entretenimento Digital pela Univali, construí uma trajetória pouco convencional — passando por sala de aula, secretarias municipais, controle de qualidade de software e produção gráfica.",
      p2: "Hoje sou Assessor Executivo do CEO da ProcGroup — cuido da gestão de contratos públicos e do relacionamento com prefeituras, além de projetos institucionais como o novo site da empresa. Em paralelo, sou fundador da BMR3D e construo o NozzleNote, meu app de manutenção para impressoras 3D, hoje em Beta.",
    },
    keyfacts: {
      years: "Anos de experiência multidisciplinar",
      orgs: "Organizações e instituições",
      sectors: "Setores: público e privado",
      reduction: "Redução de tempo conquistada em processo de diagramação",
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
      title: "Pedro Bortot — Executive Advisor, Product & Innovation",
      description:
        "Executive Advisor at ProcGroup and founder of NozzleNote and BMR3D — a multidisciplinary profile bridging public sector management, product and innovation.",
    },
    nav: {
      sobre: "About",
      cases: "Career",
      projetos: "Projects",
      skills: "Skills",
      contato: "Contact",
      openMenu: "Open menu",
    },
    hero: {
      location: "Pato Branco, Paraná — Brazil",
      headline: "Public management, product and innovation in one profile",
      subtext:
        "Executive advisory, public contract management and my own products (NozzleNote, BMR3D) — moving between the public and private sectors.",
      cta: "View career",
    },
    about: {
      label: "About",
      caption: "Pedro Bortot — Pato Branco, Brazil",
      p1: "A Game Design and Digital Entertainment graduate from Univali, I've built an unconventional path — from the classroom to municipal government, software quality control, and graphic production.",
      p2: "Today I'm Executive Advisor to the CEO of ProcGroup — handling public contract management and relationships with municipal governments, plus institutional projects like the company's new website. In parallel, I'm the founder of BMR3D and I'm building NozzleNote, my 3D printer maintenance app, currently in Beta.",
    },
    keyfacts: {
      years: "Years of multidisciplinary experience",
      orgs: "Organizations and institutions",
      sectors: "Sectors: public and private",
      reduction: "Time reduction achieved on a layout process",
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
