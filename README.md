# Portafolio Profesional — Yeison Bocanegra

## 📋 Descripción

Portafolio web profesional que presenta mis proyectos de ingeniería de software, experiencia laboral, stack tecnológico y datos de contacto. Diseñado como herramienta de empleabilidad para reclutadores técnicos, con enfoque en demostrar impacto real y sistemas en producción.

> 🌐 **Desplegado en:** *(próximamente)*

### Objetivo
Centralizar en una sola página toda la información relevante para un proceso de selección: quién soy, qué he construido, con qué tecnologías trabajo y cómo contactarme. Cada proyecto enlaza directamente a su repositorio en GitHub y, cuando aplica, a su URL en producción.

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|:---|:---|:---|
| Astro | 6.1 | Framework de generación estática con componentes `.astro` |
| TypeScript | — | Tipado de datos de proyectos y experiencia |
| CSS3 | — | Diseño responsive con dark mode, glassmorphism y animaciones |
| Vercel | — | Deploy estático con CI/CD automático |

## 🏗️ Arquitectura

```
src/
├── pages/
│   └── index.astro            # Página principal (single-page)
├── components/
│   ├── Header.astro           # Navegación fija con glassmorphism
│   ├── Hero.astro             # Presentación, métricas y CTA
│   ├── ProjectGrid.astro      # Grid de cards de proyectos
│   ├── ProjectCard.astro      # Card individual con problema/solución/stack
│   ├── Timeline.astro         # Experiencia laboral y formación académica
│   ├── TechStack.astro        # Grid de tecnologías por categoría
│   └── Footer.astro           # Contacto, links sociales y CTA
├── data/
│   └── projects.ts            # Datos tipados de los proyectos del portafolio
├── layouts/
│   └── Layout.astro           # Layout base con SEO, Open Graph y animaciones
└── styles/
    └── global.css             # Sistema de diseño: tokens, componentes y responsive

public/
├── cv-yeison-bocanegra.pdf    # CV descargable en formato ATS
└── favicon.svg                # Icono del sitio
```

## 🎨 Diseño

- **Dark mode** con paleta profesional y acentos azules
- **Glassmorphism** en header y tarjetas con `backdrop-filter`
- **Animaciones de entrada** con `IntersectionObserver` (fade-up al hacer scroll)
- **Responsive** mobile-first con breakpoints en 768px y 900px
- **Tipografía** Inter + Outfit (Google Fonts)

## ⚡ Instalación Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/YeisonBocanegra/portfolio-.git
cd portfolio-

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# El servidor se levanta en http://localhost:4321
```

## 💼 Estado del Proyecto

**Activo** — Este portafolio se actualiza con cada nuevo proyecto profesional. Sirve como carta de presentación para procesos de selección y complementa el perfil de GitHub.

## 👤 Autor

**Yeison Bocanegra** — Ingeniero de Sistemas
- GitHub: [@YeisonBocanegra](https://github.com/YeisonBocanegra)
