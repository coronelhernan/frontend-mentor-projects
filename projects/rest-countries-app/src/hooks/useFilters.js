import { useState, useEffect, useMemo } from "react";

export function useFilters(data) {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  // Handle, filter regions
  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Debounce function
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    // Clear debounce
    return () => clearTimeout(timer);
  }, [search]);

  // Filters data...
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
		handleSearch 
	};
}
