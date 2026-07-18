export interface ExperienceText {
  period: string;
  org: string;
  role: string;
  description: string;
  detail: string;
  tags?: string[];
}

export interface Experience {
  slug: string;
  current?: boolean;
  logo?: string;
  pt: ExperienceText;
  en: ExperienceText;
}

export const experiences: Experience[] = [
  {
    slug: "procgroup",
    current: true,
    logo: "/logos/procgroup.webp",
    pt: {
      period: "Mai 2026 — Atual",
      org: "ProcGroup",
      role: "Assessor Executivo",
      description:
        "Assessoria direta ao CEO, gestão de contratos públicos e relacionamento com prefeituras, além de projetos institucionais como o novo site da empresa.",
      detail:
        "Assessoro diretamente o CEO em decisões estratégicas e na resolução de demandas em sua ausência. Conduzo o relacionamento com prefeituras e a gestão de contratos públicos da empresa, assumi a liderança do desenvolvimento do novo site institucional da ProcGroup e monto a base do planejamento de presença da empresa em eventos (equipe, materiais e apresentação), sempre com apoio de ferramentas de IA generativa (GPT, Claude, Gemini, Codex) para acelerar produção e síntese de informação.",
      tags: [
        "Gestão de Contratos Públicos",
        "Relacionamento Institucional",
        "IA Generativa",
      ],
    },
    en: {
      period: "May 2026 — Present",
      org: "ProcGroup",
      role: "Executive Advisor",
      description:
        "Direct advisory to the CEO, public contract management and relationships with municipal governments, plus institutional projects like the company's new website.",
      detail:
        "I advise the CEO directly on strategic decisions and handle demands in his absence. I lead the relationship with municipal governments and manage the company's public contracts, took the lead on developing ProcGroup's new institutional website, and build the groundwork for the company's presence at events (team, materials and presentation), always supported by generative AI tools (GPT, Claude, Gemini, Codex) to speed up production and information synthesis.",
      tags: [
        "Public Contract Management",
        "Institutional Relations",
        "Generative AI",
      ],
    },
  },
  {
    slug: "conims",
    logo: "/logos/conims.png",
    pt: {
      period: "Fev 2025 — Fev 2026",
      org: "CONIMS",
      role: "Supervisor Administrativo / Encarregado de Processo Administrativo",
      description:
        "Planejamento, execução e validação de processos críticos. Testes manuais em sistemas internos (UI, regras de negócio, fluxos), validação de dados com SQL básico e criação de checkpoints de qualidade.",
      detail:
        "Planejamento, execução e validação de processos administrativos críticos. Testes manuais em sistemas internos cobrindo interface, regras de negócio e fluxos completos, validação de dados com SQL básico e criação de checkpoints de qualidade para reduzir falhas antes da entrega.",
      tags: ["QA", "SQL", "Processos"],
    },
    en: {
      period: "Feb 2025 — Feb 2026",
      org: "CONIMS",
      role: "Administrative Supervisor / Administrative Process Officer",
      description:
        "Planning, execution and validation of critical processes. Manual testing on internal systems (UI, business rules, flows), data validation with basic SQL, and creation of quality checkpoints.",
      detail:
        "Planning, execution and validation of critical administrative processes. Manual testing on internal systems covering interface, business rules and full flows, data validation with basic SQL, and creation of quality checkpoints to reduce failures before delivery.",
      tags: ["QA", "SQL", "Processes"],
    },
  },
  {
    slug: "fisk",
    logo: "/logos/fisk.png",
    pt: {
      period: "Ago 2024 — Jun 2025",
      org: "Fisk",
      role: "Professor de Inglês",
      description:
        "Ensino de inglês fluente para turmas de diferentes níveis.",
      detail:
        "Ensino de inglês fluente para turmas de diferentes níveis, unindo domínio técnico do idioma com didática voltada à comunicação prática.",
    },
    en: {
      period: "Aug 2024 — Jun 2025",
      org: "Fisk",
      role: "English Teacher",
      description: "Fluent English instruction for classes at different levels.",
      detail:
        "Fluent English instruction for classes at different levels, combining strong command of the language with teaching focused on practical communication.",
    },
  },
  {
    slug: "secretaria-cti-assessor",
    logo: "/logos/secretaria-cti.png",
    pt: {
      period: "Jul 2023 — Dez 2024",
      org: "Secretaria Municipal de Ciência, Tecnologia e Inovação de Pato Branco",
      role: "Assessor de Infraestrutura",
      description:
        "Supervisão de projetos de infraestrutura tecnológica e de inovação.",
      detail:
        "Supervisão de projetos de infraestrutura tecnológica e de inovação do município, dando sequência ao trabalho iniciado como Chefe da Seção de Projetos na mesma secretaria.",
    },
    en: {
      period: "Jul 2023 — Dec 2024",
      org: "Pato Branco Municipal Department of Science, Technology and Innovation",
      role: "Infrastructure Advisor",
      description:
        "Oversight of technology infrastructure and innovation projects.",
      detail:
        "Oversight of technology infrastructure and innovation projects for the municipality, continuing the work started as Head of the Projects Division at the same department.",
    },
  },
  {
    slug: "mk-academy",
    pt: {
      period: "Abr 2023 — Nov 2023",
      org: "Mk Academy Pato Branco",
      role: "Professor de Game Art e e-Sports",
      description:
        "Aulas de Blender e de e-sports competitivo (Valorant, Call of Duty).",
      detail:
        "Aulas de Blender voltadas à modelagem para jogos, além de treinamento e formação de equipes de e-sports competitivo em Valorant e Call of Duty.",
      tags: ["Blender", "Ensino"],
    },
    en: {
      period: "Apr 2023 — Nov 2023",
      org: "Mk Academy Pato Branco",
      role: "Game Art & Esports Instructor",
      description:
        "Blender classes and competitive esports coaching (Valorant, Call of Duty).",
      detail:
        "Blender classes focused on game modeling, plus training and coaching for competitive esports teams in Valorant and Call of Duty.",
      tags: ["Blender", "Teaching"],
    },
  },
  {
    slug: "secretaria-cti-projetos",
    logo: "/logos/secretaria-cti.png",
    pt: {
      period: "Jun 2022 — Jul 2023",
      org: "Secretaria Municipal de Ciência, Tecnologia e Inovação de Pato Branco",
      role: "Chefe da Seção de Projetos",
      description:
        "Gestão de equipes interdisciplinares e supervisão de projetos de infraestrutura tech e inovação.",
      detail:
        "Gestão de equipes interdisciplinares e supervisão de projetos de infraestrutura tecnológica e inovação para o município, período que antecedeu a promoção para Assessor de Infraestrutura na mesma secretaria.",
    },
    en: {
      period: "Jun 2022 — Jul 2023",
      org: "Pato Branco Municipal Department of Science, Technology and Innovation",
      role: "Head of the Projects Division",
      description:
        "Management of interdisciplinary teams and oversight of tech infrastructure and innovation projects.",
      detail:
        "Management of interdisciplinary teams and oversight of technology infrastructure and innovation projects for the municipality, in the period leading up to the promotion to Infrastructure Advisor at the same department.",
    },
  },
  {
    slug: "secretaria-educacao",
    logo: "/logos/secretaria-educacao.png",
    pt: {
      period: "Abr 2021 — Jul 2022",
      org: "Secretaria Municipal de Educação de Pato Branco",
      role: "Chefe da Seção de Cenários e Adereços",
      description:
        "Criação de jogos educativos e supervisão de impressoras 3D para materiais didáticos. Projeto de destaque: mascotes 3D que viraram ícones em apresentações escolares.",
      detail:
        "Criação de jogos educativos e supervisão de impressoras 3D para produção de materiais didáticos das escolas do município. Projeto de destaque: o design e a impressão de mascotes 3D que viraram ícones recorrentes em apresentações e eventos escolares.",
      tags: ["Impressão 3D", "Blender", "Educação"],
    },
    en: {
      period: "Apr 2021 — Jul 2022",
      org: "Pato Branco Municipal Department of Education",
      role: "Head of the Sets & Props Division",
      description:
        "Creation of educational games and oversight of 3D printers for teaching materials. Highlight project: 3D mascots that became recurring icons at school events.",
      detail:
        "Creation of educational games and oversight of 3D printers for producing teaching materials for the municipality's schools. Highlight project: designing and 3D-printing mascots that became recurring icons in school presentations and events.",
      tags: ["3D Printing", "Blender", "Education"],
    },
  },
  {
    slug: "huner-ti",
    logo: "/logos/huner-ti.png",
    pt: {
      period: "Mai 2020 — Dez 2020",
      org: "HUNER TI Colaborativa",
      role: "Diagramador do Diário Oficial dos Municípios",
      description:
        "Diagramação em Adobe InDesign, Illustrator e Photoshop. Otimização do processo, reduzindo o tempo de produção em 15%.",
      detail:
        "Diagramação do Diário Oficial dos Municípios em Adobe InDesign, Illustrator e Photoshop. Revisão do processo de produção que resultou em uma redução de 15% no tempo necessário para fechar cada edição.",
      tags: ["InDesign", "Illustrator", "Photoshop"],
    },
    en: {
      period: "May 2020 — Dec 2020",
      org: "HUNER TI Colaborativa",
      role: "Layout Designer, Official Municipal Gazette",
      description:
        "Layout design in Adobe InDesign, Illustrator and Photoshop. Process optimization that cut production time by 15%.",
      detail:
        "Layout design for the Official Municipal Gazette using Adobe InDesign, Illustrator and Photoshop. Revised the production process, cutting the time needed to close each edition by 15%.",
      tags: ["InDesign", "Illustrator", "Photoshop"],
    },
  },
  {
    slug: "tentaculo",
    pt: {
      period: "Fev 2020 — Abr 2020",
      org: "Tentáculo",
      role: "Estagiário de Desenvolvimento Front-end",
      description:
        "Componentes modulares reutilizáveis em React, CSS e HTML5. Balneário Camboriú.",
      detail:
        "Desenvolvimento de componentes modulares reutilizáveis em React, CSS e HTML5, em Balneário Camboriú — primeiro contato profissional com desenvolvimento front-end.",
      tags: ["React", "HTML/CSS"],
    },
    en: {
      period: "Feb 2020 — Apr 2020",
      org: "Tentáculo",
      role: "Front-End Development Intern",
      description:
        "Reusable modular components in React, CSS and HTML5. Balneário Camboriú.",
      detail:
        "Built reusable modular components in React, CSS and HTML5, in Balneário Camboriú — my first professional experience in front-end development.",
      tags: ["React", "HTML/CSS"],
    },
  },
];
