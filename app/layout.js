import Link from 'next/link';

export const metadata = {
  title: 'Mi Blog con Next.js',
  description: 'Aprendiendo a crear una app web moderna',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>

<nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
  <Link href="/" style={{ marginRight: '1rem' }}>
    Inicio
  </Link>
  <Link href="/acerca" style={{ marginRight: '1rem' }}>
    Acerca de
  </Link>

  {/* ESTE ES EL ENLACE NUEVO */}
  <Link href="/blog">
    Blog
  </Link>
</nav>

        {children}
      </body>
    </html>
  );
}