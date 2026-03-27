import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  type?: string
  image?: string
}

const SEO = ({ 
  title = 'Ane Dulce Sabor - Dulces Artesanales', 
  description = 'Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.',
  canonical = 'https://anedulcesabor.com',
  type = 'website',
  image = '/Logo.webp'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />
      <html lang="es" />
      <meta charSet="utf-8" />
    </Helmet>
  )
}

export default SEO
