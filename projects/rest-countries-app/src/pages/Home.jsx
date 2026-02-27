import Navbar from "../components/sections/Navbar";
import { Search } from "lucide-react";
import { useFilters } from "../hooks/useFilters";
import countries from "../../data/data.json";
import ListCountries from "../components/list/ListCountries";

export default function Home() {
  const { region, search, filteredCountries, handleRegion, handleSearch } =
    useFilters(countries);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex flex-col items-center gap-5 lg:gap-12">
      <Navbar />

      {/* Filters */}
      <div
        className="filters flex flex-col w-full px-4 gap-10
					lg:px-18 lg:flex-row lg:justify-between"
      >
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[--color-text] lg:left-8"
            size={20}
          />

          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search for a country..."
            className="bg-[var(--color-surface)] text-[var(--color-text)] 
							placeholder:text-[--color-text-muted]
							h-12 rounded-md w-full pl-10 pr-4 outline-none
							lg:w-120 lg:text-sm lg:pl-18"
            style={{
              boxShadow:
                "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
            }}
          />
        </div>

        <select
          value={region}
          onChange={handleRegion}
          className="bg-[var(--color-surface)] text-[var(--color-text)]
						h-12 w-3/5 rounded-md px-6 lg:w-48"
          id="select-regions"
          style={{
            boxShadow:
              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
          }}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* List of countries */}
      <ListCountries countries={filteredCountries} />
    </div>
  );
}
