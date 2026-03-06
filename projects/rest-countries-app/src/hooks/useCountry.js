import { useState, useEffect } from "react";
import { getCountryByName } from "../services/countries";

export function useCountry(name) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const data = await getCountryByName(name);
        setCountry(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (name) loadCountry();
  }, [name]);

  return { country, loading, error };
}
