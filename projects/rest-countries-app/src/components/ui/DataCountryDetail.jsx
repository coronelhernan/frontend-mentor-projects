import ListBorderCountries from "../list/ListBorderCountries";

export default function DataCountryDetail({ country }) {
  if (!country) return null;

  const currencies = Object.values(country.currencies ?? {})
    .map(c => c.name)
    .join(", ");

  const languages = Object.values(country.languages ?? {})
    .join(", ");

  return (
    <article className="flex flex-col space-y-6 lg:py-32 lg:px-10 lg:justify-center">
      <header>
        <h2 className="font-bold text-xl">{country.name}</h2>
      </header>

      <section className="flex flex-col lg:flex-row lg:justify-between">
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
