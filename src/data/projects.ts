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
    id: "tmquinta",
    title: "TM Quinta",
    subtitle: "Transportes, Maquinarias y Movimientos de Tierra",
    category: "Plataforma Web & Venta de Áridos",
    image: "/tmquinta-hero.webp",
    url: "https://tmquinta.cl",
    accentColor: "#00f2ea",
    accentBorderClass: "hover:border-[#00f2ea]/60",
    accentTextClass: "text-[#00f2ea]",
    accentBgClass: "bg-[#00f2ea]/10 border-[#00f2ea]/30 text-[#00f2ea]",
    shortDesc: "Plataforma de servicios de transporte, movimiento de tierras, arriendo de maquinaria, retiro de escombros y venta de áridos en la V Región.",
    tags: ["Maquinaria Pesada", "Áridos & Maicillo", "Movimiento de Tierras", "Cotización WhatsApp"],
    targetAudience: "Empresas constructoras, contratistas, parceleros y particulares en toda la Región de Valparaíso (Gran Valparaíso, Marga Marga, Quillota, Aconcagua y San Antonio) que necesitan arriendo de maquinaria pesada, venta de áridos o fletes con respuesta inmediata.",
    particularity: "Desarrollo web enfocado en la conversión rápida y experiencia móvil para usuarios en obra. Dispone de catálogo de servicios segmentado (retroexcavadora, minicargador, camión 3/4, tolvas 16m³ y despacho de áridos) con cotización One-Click directa a WhatsApp y optimización para búsquedas locales de urgencia.",
    highlights: [
      "Catálogo completo de maquinaria pesada, fletes y tolvas de 16m³",
      "Cotización One-Click directa a WhatsApp segmentada por servicio",
      "Arquitectura ultra rápida adaptada para faenas y obras en terreno",
      "Estrategia de SEO Local y cobertura en comunas de la V Región"
    ],
    additionalInfo: "Optimizada para transformar visitas y búsquedas locales en conversaciones directas por WhatsApp y llamadas de cotización en tiempo récord."
  },
  /*
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
  */
  {
    id: "fugasdetect",
    title: "Fugas Detect",
    subtitle: "Detección No Invasiva de Fugas & Gasfitería Integral",
    category: "Plataforma Web en Astro & SEO de Conversión",
    image: "/fugasdetect.webp",
    url: "https://fugasdetect.cl",
    accentColor: "#38bdf8",
    accentBorderClass: "hover:border-[#38bdf8]/60",
    accentTextClass: "text-[#38bdf8]",
    accentBgClass: "bg-[#38bdf8]/10 border-[#38bdf8]/30 text-[#38bdf8]",
    shortDesc: "Plataforma web de máxima velocidad desarrollada en Astro para detección de filtraciones con geófono, termografía y gasfitería con captación directa a WhatsApp.",
    tags: ["Astro", "Detección No Invasiva", "SEO Local V Región", "Conversión WhatsApp"],
    targetAudience: "Propietarios de viviendas, parcelas, administradores de edificios y empresas en la Región de Valparaíso (Viña del Mar, Valparaíso, Concón, Quilpué, Villa Alemana, Limache y Quillota) que sufren filtraciones ocultas, alzas anormales en su cuenta de agua o problemas de gasfitería y calefón.",
    particularity: "Desarrollo web ultraligero y de alto rendimiento construido en Astro. Diseñado para responder a situaciones de urgencia doméstica con arquitectura mobile-first, optimización SEO Local en toda la Región de Valparaíso ('fugas de agua', 'gasfitería de urgencia'), botón de cotización directa a WhatsApp y blog técnico educativo para posicionamiento orgánico.",
    highlights: [
      "Desarrollo en Astro con velocidad de carga instantánea y máximo puntaje en Core Web Vitals",
      "Embudos de cotización directa a WhatsApp segmentados por tipo de servicio y urgencia",
      "Estrategia de SEO Local geolocalizada en comunas del Gran Valparaíso y Marga Marga",
      "Integración de blog técnico para captación orgánica y alta tasa de retención"
    ],
    additionalInfo: "Diseñado para transformar búsquedas de urgencia en contactos inmediatos, destacando su tecnología no destructiva y más de 48 reseñas 5 estrellas en Google."
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
