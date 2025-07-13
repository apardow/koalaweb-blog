import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'o6fdksc4', // ¡OJO! Reemplaza esto
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-07-12', // Usa la fecha de hoy
});