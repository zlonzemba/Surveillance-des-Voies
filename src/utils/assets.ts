/**
 * Asset URL helper to guarantee asset visibility across GitHub Pages, Netlify,
 * custom domains, and local preview environments.
 */

export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (/^(https?:|data:|blob:)/i.test(path)) {
    return path;
  }
  
  const clean = path.replace(/^\/+/, '');
  const rawBase = import.meta.env.BASE_URL || './';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  
  return `${base}${clean}`;
}

export const ASSET_MAP = {
  // Schema (Sprint synthesis)
  schemaWebp: 'assets/schema_du_rail_au_reparateur.webp',
  schemaPng: 'assets/schema_du_rail_au_reparateur.png',
  schemaFallbackPng: 'assets/schema_page01.png',
  schemaPdf: 'assets/schema_complet_du_rail_au_reparateur.pdf',
  schemaOriginalPdf: 'assets/aistudio/1___Sch_ma_complet_du_syst_me_c1fed2f7.pdf',

  // Conclusion official slide (Page 2 of user's presentation)
  conclusionWebp: 'assets/cas_c_page02.webp',
  conclusionPng: 'assets/cas_c_page02.png',

  // Complete presentation PDF
  presentationPdf: 'assets/presentation_complete_cas_c.pdf',
  presentationOriginalPdf: 'assets/aistudio/Du_rail_au_r_parateur___Cas_C_66852fa6.pdf',
} as const;
