import { useState, useEffect } from "react";
import { getCountries } from "../services/countries";
import { useFilters } from "./useFilters";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filters...
  const {
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch
  } = useFilters(countries);

  // Load data fetch API..
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  return {
    loading,
    error,
    region,
    search,
    filteredCountries,
    handleRegion,
    handleSearch
  };
}
