// Piezas del Archivo. Para añadir una: copia la imagen en public/images/ y añade una línea aquí.
// col: columna en escritorio (1, 2 o 3; en móvil solo se ven la 1 y la 2). w y h: tamaño real de la imagen.
export const archive = [
  { src: 'post-abrimos.webp', w: 640, h: 800, col: 1, es: 'Panthera Fitness · Apertura', en: 'Panthera Fitness · Opening' },
  { src: 'castuo-post.webp', w: 330, h: 330, col: 1, es: 'Castúo · Post de Instagram', en: 'Castúo · Instagram post' },
  { src: 'castuo-historia.webp', w: 286, h: 507, col: 2, es: 'Castúo · Historia de Instagram', en: 'Castúo · Instagram story' },
  { src: 'post-horarios-tarifas.webp', w: 640, h: 800, col: 2, es: 'Panthera Fitness · Horarios y tarifas', en: 'Panthera Fitness · Hours & prices' },
  { src: 'post-promocion.webp', w: 640, h: 800, col: 3, es: 'Panthera Fitness · Promoción de apertura', en: 'Panthera Fitness · Opening offer' },
  { src: 'castuo-landing-vino.webp', w: 810, h: 450, col: 3, es: 'Castúo · Landing page', en: 'Castúo · Landing page' },
] as const;
