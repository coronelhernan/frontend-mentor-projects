import { Link } from "react-router-dom";

export default function CountryCard({
  image,
  name,
  population,
  region,
  capital,
}) {
  return (
    <li className="w-4/5 bg-[var(--color-surface)] rounded-md overflow-hidden shadow-sm grid grid-rows-[150px_auto]">
      <img
        src={image}
        alt={`Flag of ${name}`}
        className="w-full h-full object-cover"
      />

      <Link
        to={`/detail/${encodeURIComponent(name)}`}
        className="block bg-[var(--color-surface)] rounded-md overflow-hidden shadow-sm"
      >
        <div className="px-8 py-6 space-y-2 lg:px-6 lg:py-12">
          <h3 className="text-[var(--color-text)] font-bold text-xl">{name}</h3>

          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Population:</span> {population}
          </p>

          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Region:</span> {region}
          </p>

          <p className="text-[var(--color-text)] text-base lg:text-sm">
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </li>
  );
}
