// Datos personales, trayectoria y disciplinas. Edita aquí para actualizar la web.
import type { Lang } from '../i18n/ui';

export const profile = {
  name: 'María Teresa Barrero',
  nameLines: ['María Teresa', 'Barrero'],
  initials: 'MTB',
  jobTitle: 'Full Stack Marketer',
  email: 'mariateresabi98@gmail.com',
  phone: '654 433 998',
  phoneHref: 'tel:+34654433998',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maria-teresa-barrero-isidoro/' },
    { label: 'GitHub', href: 'https://github.com/TeresaBarrero' },
  ],
  cv: 'cv/Teresa_Barrero_CV.pdf',
  tools: 'HTML5, CSS3, JavaScript, WordPress, Elementor, Photoshop, Illustrator, Canva, CapCut, Premiere Pro, Google Ads, Meta Ads, GA4, Tag Manager, Search Console, Google Business Profile, n8n, Claude Code',
};

// [entidad, puesto, años, lista opcional de eventos (desplegable)]
type Item = [string, string, string, string[]?];
export const experience: Record<Lang, Item[]> = {
  es: [
    ['anda CONMiGO', 'Digital Marketing & Web Specialist', '2024–2026'],
    ['Okdiario', 'Web & Social Content Specialist', '2024'],
    ['Bornan Sport Technology', 'Web Data & Systems Specialist', '2023–2025', ['Juegos Centroamericanos y del Caribe · El Salvador 2023', 'Juegos Panamericanos · Santiago de Chile 2023', 'Saudi Games 2023', 'Saudi Games 2024', 'Juegos Panamericanos Junior · Paraguay 2025']],
    ['Fundación AVA · RTVA', 'Digital Content & Communications Specialist', '2022–2023'],
  ],
  en: [
    ['anda CONMiGO', 'Digital Marketing & Web Specialist', '2024–2026'],
    ['Okdiario', 'Web & Social Content Specialist', '2024'],
    ['Bornan Sport Technology', 'Web Data & Systems Specialist', '2023–2025', ['Central American and Caribbean Games · El Salvador 2023', 'Pan American Games · Santiago, Chile 2023', 'Saudi Games 2023', 'Saudi Games 2024', 'Junior Pan American Games · Paraguay 2025']],
    ['Fundación AVA · RTVA', 'Digital Content & Communications Specialist', '2022–2023'],
  ],
};
// Certificados e idiomas: [nombre, detalle] (se muestran como listado en «Sobre mí»)
export const certificates: Record<Lang, [string, string][]> = {
  es: [['Google Analytics 4 (GA4)', 'Google Skillshop'], ['Google Ads (Medición y Búsqueda)', 'Google Skillshop'], ['Google Prompting Essentials', 'Google Skillshop']],
  en: [['Google Analytics 4 (GA4)', 'Google Skillshop'], ['Google Ads (Measurement & Search)', 'Google Skillshop'], ['Google Prompting Essentials', 'Google Skillshop']],
};
export const languages: Record<Lang, [string, string][]> = {
  es: [['Castellano', 'Nativo'], ['Inglés', 'B2 · Linguaskill Cambridge'], ['Francés', 'B1']],
  en: [['Spanish', 'Native'], ['English', 'B2 · Linguaskill Cambridge'], ['French', 'B1']],
};

export const education: Record<Lang, Item[]> = {
  es: [
    ['Máster en Marketing Digital y Diseño Web', 'CEI · Online', '2023–2024'],
    ['Máster en Investigación en Periodismo', 'Universidad Complutense de Madrid', '2022–2023'],
    ['Grado en Periodismo', 'Universidad de Sevilla', '2016–2020'],
  ],
  en: [
    ['MA in Digital Marketing & Web Design', 'CEI · Online', '2023–2024'],
    ['MA in Journalism Research', 'Complutense University of Madrid', '2022–2023'],
    ['BA in Journalism', 'University of Seville', '2016–2020'],
  ],
};

type Disc = { title: string; text: string; items: [string, string][] };
export const disciplines: Record<Lang, Disc[]> = {
  es: [
    { title: 'Diseño web y UX/UI', text: 'Webs corporativas y landing pages de alta conversión, diseñadas para el móvil y para cargar rápido. Las maqueto yo misma, a mano o en WordPress.', items: [['HTML5, CSS3 y JS', 'Frontend'], ['WordPress y Elementor', 'CMS'], ['Landing pages', 'Conversión'], ['Mobile first', 'UX'], ['Rendimiento', 'Core Web Vitals'], ['Desarrollo con IA', 'Claude Code']] },
    { title: 'Paid Media y analítica', text: 'Campañas orientadas a captar leads con el coste bajo control, y una medición que permite saber qué funciona.', items: [['Google Ads', 'Búsqueda'], ['Meta Ads', 'Social'], ['CRO', 'Conversión'], ['GA4', 'Medición'], ['Google Tag Manager', 'Etiquetado'], ['CPL y ROAS', 'KPIs']] },
    { title: 'SEO y posicionamiento local', text: 'Que te encuentren quienes te buscan: SEO técnico, de contenidos y local, también para los buscadores con IA.', items: [['SEO técnico', 'Auditoría'], ['SEO on-page', 'Contenido'], ['Google Business Profile', 'Local'], ['Search Console', 'Seguimiento'], ['Datos estructurados', 'Schema'], ['GEO · llms.txt', 'Buscadores IA']] },
    { title: 'Contenido, redes y diseño gráfico', text: 'Creatividades para redes, vídeo y piezas gráficas con una línea visual coherente, y textos que cuentan bien la historia de la marca.', items: [['Photoshop, Illustrator y Canva', 'Diseño'], ['CapCut y Premiere Pro', 'Vídeo'], ['Instagram y Facebook', 'Redes'], ['Estrategia de contenidos', 'Plan'], ['Copywriting SEO', 'Texto'], ['Entrevistas y reportajes', 'Periodismo']] },
    { title: 'IA y automatización', text: 'Integro herramientas de inteligencia artificial para automatizar flujos de trabajo y ganar tiempo en tareas repetitivas.', items: [['n8n', 'Workflows'], ['Automatización', 'Procesos'], ['Prompting', 'Google'], ['Desarrollo guiado por IA', 'Web']] },
  ],
  en: [
    { title: 'Web & UX/UI design', text: 'Corporate websites and high-converting landing pages, designed for mobile and built to load fast. I build them myself, by hand or in WordPress.', items: [['HTML5, CSS3 & JS', 'Frontend'], ['WordPress & Elementor', 'CMS'], ['Landing pages', 'Conversion'], ['Mobile first', 'UX'], ['Performance', 'Core Web Vitals'], ['AI-assisted dev', 'Claude Code']] },
    { title: 'Paid Media & analytics', text: 'Lead-generation campaigns with costs under control, and tracking that shows what works.', items: [['Google Ads', 'Search'], ['Meta Ads', 'Social'], ['CRO', 'Conversion'], ['GA4', 'Measurement'], ['Google Tag Manager', 'Tagging'], ['CPL & ROAS', 'KPIs']] },
    { title: 'SEO & local search', text: 'Get found by the people looking for you: technical, content and local SEO, including AI search engines.', items: [['Technical SEO', 'Audit'], ['On-page SEO', 'Content'], ['Google Business Profile', 'Local'], ['Search Console', 'Tracking'], ['Structured data', 'Schema'], ['GEO · llms.txt', 'AI search']] },
    { title: 'Content, social & graphic design', text: 'Social media creatives, video and graphic pieces with a consistent visual line, and copy that tells the brand’s story well.', items: [['Photoshop, Illustrator & Canva', 'Design'], ['CapCut & Premiere Pro', 'Video'], ['Instagram & Facebook', 'Social'], ['Content strategy', 'Plan'], ['SEO copywriting', 'Copy'], ['Interviews & features', 'Journalism']] },
    { title: 'AI & automation', text: 'I bring AI tools into the workflow to automate processes and save time on repetitive tasks.', items: [['n8n', 'Workflows'], ['Automation', 'Processes'], ['Prompting', 'Google'], ['AI-driven development', 'Web']] },
  ],
};

// Proyectos en marcha que aún no tienen caso de estudio (aparecen como tarjeta "En proceso").
export const inProgress: Record<Lang, { title: string; text: string; year: number }[]> = {
  es: [{ title: 'Azara Coffee', text: 'Branding, web y marketing digital online y offline', year: 2026 }],
  en: [{ title: 'Azara Coffee', text: 'Branding, website and online & offline digital marketing', year: 2026 }],
};
