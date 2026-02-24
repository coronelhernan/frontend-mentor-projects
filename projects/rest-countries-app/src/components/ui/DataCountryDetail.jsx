import ListBorderCountries from "../list/ListBorderCountries";

export default function DataCountryDetail({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) {
  return (
    <article className="lg:min-h-[60vh] space-y-2 flex lg:justify-center flex-col lg:gap-8">
      <header>
        <h2 className="text-dark-text font-bold text-xl">{name}</h2>
      </header>

      {/* Data */}
      <section className="flex flex-col lg:flex-row lg:justify-between">

        {/* Main data */}
        <dl className="flex flex-col gap-2 space-y-2 text-dark-text text-base">

          <div>
            <dt className="font-semibold inline">Native Name: </dt>
            <dd className="inline">{nativeName}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Population: </dt>
            <dd className="inline">{population}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Region: </dt>
            <dd className="inline">{region}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Sub Region: </dt>
            <dd className="inline">{subRegion}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Capital: </dt>
            <dd className="inline">{capital}</dd>
          </div>

        </dl>

        {/* Extra data */}
        <dl className="flex flex-col gap-2 space-y-2 text-dark-text text-base">

          <div>
            <dt className="font-semibold inline">Top Level Domain: </dt>
            <dd className="inline">{topLevelDomain}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Currencies: </dt>
            <dd className="inline">{currencies}</dd>
          </div>

          <div>
            <dt className="font-semibold inline">Languages: </dt>
            <dd className="inline">{languages}</dd>
          </div>

        </dl>

      </section>

      {/* Border Countries */}
      <section
        className="flex flex-col gap-2 space-y-2 lg:flex-row lg:mt-8"
        aria-labelledby="border-countries"
      >
        <h3 id="border-countries" className="font-semibold text-dark-text text-base">
          Border Countries:
        </h3>

        <p className="text-dark-text text-base">
          {borderCountries}
        </p>

				<ListBorderCountries />				
      </section>
    </article>
  );
}
