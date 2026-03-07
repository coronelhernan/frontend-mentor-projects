import ListBorderCountries from "../list/ListBorderCountries";

/**
 * DataCountryDetail
 * -----------------
 * Componente responsable de mostrar toda la información detallada
 * de un país en la vista de detalle.
 *
 * Se encarga de formatear y presentar datos provenientes de la API,
 * como monedas, idiomas, población, región y países limítrofes.
 *
 * Props:
 * - country: objeto con la información completa del país.
 *
 * Notas:
 * - Se utilizan operadores opcionales (?.) y valores por defecto (?? {})
 *   para evitar errores cuando ciertos datos no existen en la respuesta
 *   de la API.
 * - Las monedas e idiomas se transforman en strings legibles utilizando
 *   Object.values() y join().
 * - Si el país tiene fronteras, se renderiza el componente
 *   ListBorderCountries para mostrar los países limítrofes.
 */

export default function DataCountryDetail({ country }) {
  // Si no hay país disponible, no se renderiza nada
  if (!country) return null;

  /**
   * Obtiene los nombres de las monedas del objeto currencies
   * y los transforma en un string separado por comas.
   */
  const currencies = Object.values(country.currencies ?? {})
    .map(c => c.name)
    .join(", ");

  /**
   * Obtiene los idiomas del objeto languages
   * y los transforma en un string separado por comas.
   */
  const languages = Object.values(country.languages ?? {})
    .join(", ");

  return (
    <article className="flex flex-col space-y-6 lg:py-32 lg:px-10 lg:justify-center">

      {/* Nombre del país */}
      <header>
        <h2 className="font-bold text-xl">{country.name}</h2>
      </header>

      {/* Información principal del país */}
      <section className="flex flex-col lg:flex-row lg:justify-between">

        {/* Datos generales */}
        <dl className="flex flex-col gap-2">

          <div>
            <dt className="font-semibold inline">Population:</dt>{" "}
            <dd className="inline">{country.population}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Region:</dt>{" "}
            <dd className="inline">{country.region}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Sub Region:</dt>{" "}
            <dd className="inline">{country.subregion}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Capital:</dt>{" "}
            <dd className="inline">{country.capital}</dd>
          </div>

        </dl>

        {/* Información adicional */}
        <dl className="flex flex-col gap-2">

          <div>
            <dt className="font-semibold inline">Top Level Domain:</dt>{" "}
            <dd className="inline">{country.tld?.join(", ")}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Currencies:</dt>{" "}
            <dd className="inline">{currencies}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Languages:</dt>{" "}
            <dd className="inline">{languages}</dd>
          </div>

        </dl>
      </section>

      {/* 
        Sección de países limítrofes.
        Solo se renderiza si el país tiene fronteras definidas.
      */}
      {country.borders?.length > 0 && (
        <section className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:mt-8">
          <h3 className="font-semibold text-base">
            Border Countries:
          </h3>

          <ListBorderCountries array={country.borders} />
        </section>
      )}
    </article>
  );
}
