export interface Service {
  index: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  tags: { pt: string[]; en: string[] };
}

export const services: Service[] = [
  {
    index: "01",
    title: {
      pt: "Identidade visual",
      en: "Brand identity",
    },
    description: {
      pt: "Logo, paleta, tipografia e as aplicações. Você recebe o manual da marca e os arquivos abertos, prontos para usar em qualquer lugar.",
      en: "Logo, palette, typography and applications. You get the brand manual and the source files, ready to use anywhere.",
    },
    tags: {
      pt: ["Marca", "Manual", "Arquivos abertos"],
      en: ["Brand", "Guidelines", "Source files"],
    },
  },
  {
    index: "02",
    title: {
      pt: "Site e landing page",
      en: "Website and landing page",
    },
    description: {
      pt: "Estático e rápido, em Astro. Da copy ao domínio no ar, com SEO configurado — e a hospedagem entregue na conta do cliente, não na minha.",
      en: "Static and fast, built in Astro. From the copy to the live domain, with SEO configured — and hosting handed over on the client's own account, not mine.",
    },
    tags: {
      pt: ["Astro", "SEO", "Deploy"],
      en: ["Astro", "SEO", "Deploy"],
    },
  },
  {
    index: "03",
    title: {
      pt: "3D sob demanda",
      en: "3D on demand",
    },
    description: {
      pt: "Modelagem, digitalização e impressão pela BMR 3D. Brindes corporativos, peças técnicas e protótipos — do arquivo à peça na mão.",
      en: "Modeling, scanning and printing through BMR 3D. Corporate gifts, technical parts and prototypes — from the file to the part in your hand.",
    },
    tags: {
      pt: ["Modelagem", "Digitalização", "Impressão"],
      en: ["Modeling", "Scanning", "Printing"],
    },
  },
];
