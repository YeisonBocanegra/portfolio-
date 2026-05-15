/**
 * Datos de Proyectos — Portafolio Profesional
 *
 * Define la interfaz tipada y el array de proyectos que se renderizan
 * en el componente ProjectGrid. Cada proyecto incluye:
 * - Problema de negocio que resolvió
 * - Solución técnica implementada
 * - Métrica de impacto
 * - Stack tecnológico
 * - URLs de demo y repositorio (cuando aplica)
 */
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badgeClass: string;
  problem: string;
  solution: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "aec-ai-assistant",
    title: "AEC AI Assistant",
    subtitle: "Asistente de Ventas con IA Conversacional y RAG",
    category: "IA + Full Stack",
    badgeClass: "badge-ai",
    problem:
      "El catálogo anterior requería que los clientes navegaran manualmente entre categorías y carpetas para encontrar recursos. Eso generaba fricción, abandono y dependencia de atención personalizada por WhatsApp para cada consulta.",
    solution:
      "Asistente conversacional con Gemini 2.5 Flash que busca recursos por similitud semántica (RAG + pgvector), muestra cards de producto en tiempo real, procesa pagos con Wompi y otorga acceso automático vía Google Drive API.",
    metric: "100%",
    metricLabel: "Venta automatizada",
    stack: ["Next.js 16", "Gemini AI", "RAG", "pgvector", "Supabase", "Wompi", "Google Drive API", "Vercel"],
    highlights: [
      "Búsqueda semántica con embeddings vectoriales",
      "Pagos integrados con verificación HMAC",
      "Descarga automática vía permisos de Drive",
    ],
    demoUrl: "https://asistenteaec.com/chat",
    repoUrl: "https://github.com/YeisonBocanegra/aec-ai-assistant",
  },
  {
    id: "aec-catalog",
    title: "AEC Catalog Platform",
    subtitle: "Plataforma E-commerce con SSR Dinámico",
    category: "Full Stack",
    badgeClass: "badge-fullstack",
    problem:
      "Los productos se vendían por WhatsApp sin catálogo centralizado ni profesional. Todo dependía de enviar fotos e información manualmente por chat, sin trazabilidad ni escalabilidad.",
    solution:
      "Plataforma web completa con catálogo dinámico desde Supabase, landing page por producto generada automáticamente con SSR, diseño mobile-first y conversión directa a WhatsApp.",
    metric: "80%",
    metricLabel: "Conversión móvil",
    stack: ["Astro 6", "Supabase", "Vercel SSR", "Google Drive"],
    highlights: [
      "Cada producto genera su landing automáticamente",
      "Google Drive como backbone de media (0 costo de almacenamiento)",
      "Integración con Google Ads para campañas de tráfico",
    ],
    demoUrl: "https://www.ingenieriaextremamedia.com/",
    repoUrl: "https://github.com/YeisonBocanegra/aec-catalog-platform",
  },
  {
    id: "sipm",
    title: "SIPM",
    subtitle: "Sistema de Gestión Hotelera por Turnos",
    category: "Gestión Empresarial",
    badgeClass: "badge-enterprise",
    problem:
      "Gestión manual de reservas que causaba sobreventas, cuadre de caja con errores humanos y un software obsoleto que no cubría todos los procesos operativos del hotel.",
    solution:
      "PMS completo vendido e implementado en producción: check-in/out digital, control de abonos, caja automatizada vinculada a fecha de trabajo, emisión de recibos y reportes financieros.",
    metric: "100%",
    metricLabel: "Precisión en cobros",
    stack: ["PHP", "CodeIgniter 3", "MySQL", "AdminLTE", "DataTables"],
    highlights: [
      "Software vendido comercialmente a la empresa hotelera",
      "Check-in/out digital con control de abonos",
      "Reportes financieros y cuadre de caja en 1 clic",
    ],
    repoUrl: "https://github.com/YeisonBocanegra/SIPM",
  },
  {
    id: "gesproagro",
    title: "GesproAgro",
    subtitle: "Sistema de Trazabilidad Agroindustrial",
    category: "Gestión Empresarial",
    badgeClass: "badge-enterprise",
    problem:
      "Trazabilidad inexistente de materias primas en una planta agroindustrial, cálculos manuales de rendimiento propensos a error y sin control de movimientos entre sub-bodegas.",
    solution:
      "Aplicación web con permisos por roles, flujo completo de materias primas, notas de producción con cálculo de rendimiento automático y módulo de análisis sensorial.",
    metric: "100%",
    metricLabel: "Trazabilidad de lotes",
    stack: ["PHP", "CodeIgniter 3", "MySQL", "Composer"],
    highlights: [
      "Sistema de permisos por roles (admin/operario)",
      "Registro de producción y rendimiento en minutos",
      "Análisis sensorial automatizado",
    ],
    repoUrl: "https://github.com/YeisonBocanegra/GesproAgro",
  },
];
