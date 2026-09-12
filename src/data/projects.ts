export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  url: string;
  accentColor: string;
  accentBorderClass: string;
  accentTextClass: string;
  accentBgClass: string;
  shortDesc: string;
  tags: string[];
  targetAudience: string; // Para quién fue creado
  particularity: string;  // Cuál es su particularidad / desafío técnico
  highlights: string[];   // Características destacadas / puntos clave
  additionalInfo?: string;// Información complementaria o resultados
}

export const projectsData: ProjectItem[] = [
  {
    id: "trademaq",
    title: "TradeMaq",
    subtitle: "Corretaje Industrial & Maquinaria Pesada",
    category: "Plataforma Web & Catálogo Dinámico",
    image: "/trademaq-hero.webp",
    url: "https://dancing-begonia-f2bffb.netlify.app/",
    accentColor: "#00f2ea",
    accentBorderClass: "hover:border-[#00f2ea]/60",
    accentTextClass: "text-[#00f2ea]",
    accentBgClass: "bg-[#00f2ea]/10 border-[#00f2ea]/30 text-[#00f2ea]",
    shortDesc: "Plataforma de corretaje industrial especializada en maquinaria pesada con catálogo dinámico y cotización directa.",
    tags: ["Web Premium", "Catálogo Dinámico", "Cotización Directa", "Mobile First"],
    targetAudience: "Empresas, contratistas, empresas de transporte y proveedores del sector industrial, construcción y minería en Chile que necesitan comprar, vender o tasar maquinaria pesada de forma ágil y confiable.",
    particularity: "Desarrollo web a medida con arquitectura ultrarrápida, optimizada para cargar inmediatamente en faenas mineras o de construcción con baja cobertura móvil. Dispone de catálogo clasificado por categorías y cotizador en un clic vinculado a WhatsApp.",
    highlights: [
      "Catálogo dinámico con filtros ágiles por categoría y tipo de equipo",
      "Cotizaciones instantáneas 'One-Click' enlazadas a ejecutivos vía WhatsApp",
      "Arquitectura Jamstack de máxima velocidad y seguridad",
      "Diseño adaptable 100% responsive optimizado para faenas en terreno"
    ],
    additionalInfo: "Diseñado para maximizar la tasa de conversión en consultas comerciales de alto valor, eliminando fricciones y facilitando el cierre de negocios."
  },
  {
    id: "rebbel",
    title: "Rebbel Arquitectura",
    subtitle: "Estudio de Arquitectura, Urbanismo & Diseño",
    category: "Portafolio de Autor & SEO Local",
    image: "/rebbel-hero.webp",
    url: "https://rebbel.cl",
    accentColor: "#818cf8",
    accentBorderClass: "hover:border-[#4f46e5]/60",
    accentTextClass: "text-[#818cf8]",
    accentBgClass: "bg-[#4f46e5]/10 border-[#4f46e5]/30 text-[#818cf8]",
    shortDesc: "Portafolio corporativo para estudio de arquitectura en Limache con galería visual interactiva y captación SEO.",
    tags: ["Diseño UI/UX", "SEO Local", "Galería Interactiva", "Minimalismo"],
    targetAudience: "Estudio boutique de arquitectura y diseño sustentable en la Región de Valparaíso (Limache, Olmué, Quillota, Viña del Mar), dirigido a particulares que proyectan su vivienda y a empresas que requieren obras comerciales con diseño de autor.",
    particularity: "Diseño visual minimalista con estética editorial sofisticada. Incorpora galerías fotográficas en alta definición sin merma de velocidad y una estrategia de SEO Local optimizada para términos de arquitectura y construcción en la provincia de Marga Marga.",
    highlights: [
      "Galería visual interactiva de proyectos con visualización fluida",
      "Diseño editorial limpio que proyecta exclusividad y prestigio",
      "Posicionamiento SEO Local en Marga Marga, Quillota y Gran Valparaíso",
      "Canal de contacto directo para agendar visitas técnicas y reuniones"
    ],
    additionalInfo: "Construido para proyectar el talento y la identidad arquitectónica del estudio, atrayendo clientes calificados para obras residenciales y corporativas."
  },
  {
    id: "agrosilver",
    title: "Agrosilver",
    subtitle: "Servicios Agrícolas, Mantención de Parcelas & Paisajismo",
    category: "Sitio Web de Captación & WhatsApp Leads",
    image: "/agrosilver-hero.webp",
    url: "https://agrosilver.cl",
    accentColor: "#39ff14",
    accentBorderClass: "hover:border-[#39ff14]/60",
    accentTextClass: "text-[#39ff14]",
    accentBgClass: "bg-[#39ff14]/10 border-[#39ff14]/30 text-[#39ff14]",
    shortDesc: "Sitio web de servicios agrícolas y de jardinería profesional en la Quinta Región optimizado para captación en WhatsApp.",
    tags: ["Captación WhatsApp", "SEO Técnico", "Servicios Agrícolas", "Conversión Móvil"],
    targetAudience: "Empresa de servicios agrícolas y paisajismo orientada a propietarios de parcelas de agrado, condominios campestres, fincas y empresas agropecuarias en Limache, Quillota, Olmué y el valle central de Valparaíso.",
    particularity: "Estructura enfocada en la conversión directa a WhatsApp: cada servicio (limpieza de terrenos, tala y poda en altura, riego tecnificado, cortafuegos) cuenta con un botón que pre-redacta la cotización correspondiente, asegurando contacto comercial en segundos.",
    highlights: [
      "Llamados a la acción segmentados con cotización directa en WhatsApp",
      "Velocidad de carga instantánea en smartphones para usuarios en terreno",
      "Optimización SEO para búsquedas de servicios agrícolas en la V Región",
      "Presentación detallada de faenas realizadas con testimonios de confianza"
    ],
    additionalInfo: "Optimizada para Google PageSpeed y preparada para campañas publicitarias de Google Ads, transformando clics en llamadas y mensajes efectivos."
  }
];
