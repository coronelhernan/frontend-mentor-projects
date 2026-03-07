/**
 * BorderItem
 * ----------
 * Renderiza un país limítrofe como un enlace navegable hacia
 * la página de detalle de ese país.
 *
 * El nombre del país se formatea para evitar mostrar información
 * adicional entre paréntesis que puede venir desde la API
 * (por ejemplo: "Bolivia (Plurinational State of)").
 *
 * Props:
 * @param {Object} item - Objeto que representa un país fronterizo
 * @param {string} item.name - Nombre del país
 *
 * Detalles de implementación:
 * - Se utiliza una expresión regular para extraer únicamente el nombre
 *   principal del país sin información adicional entre paréntesis.
 * - `encodeURIComponent` se utiliza para asegurar que el nombre del país
 *   sea seguro al incluirlo dentro de la URL de navegación.
 */

import { Link } from "react-router-dom";

export default function BorderItem({ item }) {
  const { name } = item;

  // Extrae el nombre del país sin información entre paréntesis
  const match = name.match(/^[^(]+|\([^)]*\)/g);
  const formatedName = match ? match[0] : name;

  return (
    <Link
      to={`/detail/${encodeURIComponent(name)}`}
      className="flex bg-[var(--color-surface)] text-[var(--color-text)]
      py-1 px-4 gap-4 rounded-xs shadow-surface
      hover:opacity-80 transition"
    >
      {formatedName}
    </Link>
  );
}
