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
    <article className="lg:min-h-[60vh] flex flex-col space-y-6 lg:gap-8">
      
      <header>
        <h2 className="text-[var(--color-text)] font-bold text-xl">
          {name}
        </h2>
      </header>

      {/* Data */}
      <section className="flex flex-col lg:flex-row lg:justify-between">

        {/* Main data */}
        <dl className="flex flex-col gap-2 text-base">
          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Native Name:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {nativeName}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Population:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {population}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Region:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {region}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Sub Region:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {subRegion}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Capital:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {capital}
            </dd>
          </div>
        </dl>

        {/* Extra data */}
        <dl className="flex flex-col gap-2 text-base">
          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Top Level Domain:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {topLevelDomain}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Currencies:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {currencies}
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-[var(--color-text)] inline">
              Languages:
            </dt>{" "}
            <dd className="inline text-[var(--color-text-muted)]">
              {languages}
            </dd>
          </div>
        </dl>
      </section>

      {/* Border Countries */}
      <section
        className="flex flex-col gap-2 lg:flex-row lg:mt-8"
        aria-labelledby="border-countries"
      >
        <h3
          id="border-countries"
          className="font-semibold text-[var(--color-text)] text-base"
        >
          Border Countries:
        </h3>

        <div className="text-[var(--color-text-muted)] text-base">
          {borderCountries}
        </div>

        <ListBorderCountries />
      </section>
    </article>
  );
}
