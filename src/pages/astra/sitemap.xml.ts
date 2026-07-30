import type { APIRoute } from "astro"

// Sitemap propio de la landing. En Search Console la propiedad de prefijo
// `/astra/` solo admite sitemaps que vivan dentro de esa ruta, así que el
// `sitemap-index.xml` de la raíz no se puede enviar ahí.
export const GET: APIRoute = ({ site }) => {
  const loc = new URL("/astra/", site).href

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  })
}
