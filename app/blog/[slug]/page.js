import { client } from '@/sanityClient.js';
import { PortableText } from '@portabletext/react';

// Esta función busca un solo post usando el slug
async function obtenerPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body
  }`;

  const post = await client.fetch(query, { slug });
  return post;
}

// El componente de la página recibe "params", que contiene el slug de la URL
export default async function PaginaPost({ params }) {
  const post = await obtenerPost(params.slug);

  return (
    <main>
      <h1>{post.title}</h1>
      {/* Este componente renderiza el contenido del cuerpo del post */}
      <div style={{ marginTop: '2rem' }}>
        <PortableText value={post.body} />
      </div>
    </main>
  );
}