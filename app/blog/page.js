// 1. Todas las importaciones van juntas al principio del archivo
import Link from 'next/link';
import { client } from '@/sanityClient.js';

// 2. Función para obtener los datos de Sanity
async function obtenerPosts() {
  // Pedimos el id, el título y el slug de cada post
  const query = `*[_type == "post"]{
    _id,
    title,
    "slug": slug.current
  }`;

  const posts = await client.fetch(query);
  return posts;
}

// 3. El componente que renderiza la página
export default async function PaginaBlog() {
  const posts = await obtenerPosts();

  return (
    <main>
      <h1>Mi Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            {/* Cada título es un enlace a su página de detalle */}
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}