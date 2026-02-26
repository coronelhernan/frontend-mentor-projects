import CountryCard from "../ui/CountryCard";

export default function ListCountries({ countries }) {
  return (
    <ul className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full place-items-center py-4 gap-8 lg:px-10 lg:gap-y-20">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
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
