import { useEffect, useState } from "react";
import { getCountriesByCodes } from "../../services/countries";
import { Link } from "react-router-dom";

export default function ListBorderCountries({ array }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const loadBorders = async () => {
      try {
        const data = await getCountriesByCodes(array);
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (array?.length) loadBorders();
  }, [array]);

  return (
    <ul className="flex flex-wrap gap-2">
      {countries.map((country) => (
        <li key={country.code}>
          <Link
            to={`/detail/${encodeURIComponent(country.name)}`}
            className="px-4 py-1 bg-[var(--color-surface)] shadow-sm rounded hover:opacity-80"
          >
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
