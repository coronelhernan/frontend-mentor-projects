import { useState, useMemo } from "react";
import { useDebounce } from "./useDebounce";

export function useFilters(data) {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 1000);

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value.trimStart());
  };

  const filteredCountries = useMemo(() => {
    return data.filter((country) => {
      const matchesRegion = region ? country.region === region : true;

      const matchesSearch = country.name
        .toLowerCase()
        .includes(debounceSearch.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [data, region, debounceSearch]);

  return {
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch,
  };
}
