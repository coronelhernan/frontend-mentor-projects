import CountryCard from "./ui/CountryCard";

/**
 * ListOfCountries
 * ----------------
 * Componente encargado de renderizar la lista de países.
 * Recorre el array recibido por props y crea una tarjeta
 * (CountryCard) por cada país.
 *
 * Props:
 * - countries: array de objetos con la información básica de cada país.
 */

function ListOfCountries({ countries }) {
  return (
    <ul className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full place-items-center py-4 gap-8 lg:px-10 lg:gap-y-20">
      {countries.map((country) => (
        <CountryCard
          key={country.name} // clave única para optimizar el renderizado en React
          image={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </ul>
  );
}

/**
 * NoCountriesResults
 * -------------------
 * Componente que se renderiza cuando no hay países
 * para mostrar en la lista (por ejemplo, cuando una
 * búsqueda o filtro no devuelve resultados).
 */

function NoCountriesResults() {
  return <p className="text-2xl">No se han encontrado resultados....</p>;
}

/**
 * Countries
 * ----------
 * Componente principal encargado de decidir qué mostrar:
 *
 * - Si existen países en el array -> renderiza ListOfCountries
 * - Si el array está vacío -> renderiza NoCountriesResults
 *
 * Props:
 * - countries: array de países ya filtrados o procesados.
 *
 * Nota:
 * Se utiliza optional chaining (?.) para evitar errores
 * si countries llega como undefined o null.
 */

export function Countries({ countries }) {
  const hasCountries = countries?.length > 0;

  return hasCountries 
    ? <ListOfCountries countries={countries} />
    : <NoCountriesResults />
}
