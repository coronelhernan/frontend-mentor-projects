const API = `https://restcountries.com/v3.1/`;
const countriesCache = new Map();
const countryCache = new Map();
const bordersCache = new Map();

export const getCountries = async () => {
  // Cache data...
  if (countriesCache.has("all")) {
    return countriesCache.get("all");
  }

  // Fetching data....
  try {
    const response = await fetch(`${API}all?fields=name,flags,population,region,capital`);
    const data = await response.json();

    // Sorted data by name...
    const sortedData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    const result = sortedData.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
      capital: country.capital?.[0] ?? "No capital",
    }));

    // Set results cache
    countriesCache.set("all", result);

    return result;
  } catch {
    throw new Error("Error fetching countries");
  }
};

export const getCountryByName = async (name) => {
  if (countryCache.has(name)) {
    return countryCache.get(name);
  }

  // Fetching data..
  try {
    const response = await fetch(
      `${API}name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );

    const json = await response.json();
    const country = json[0];

    const result = {
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital?.[0] ?? "No capital",
      tld: country.tld,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders,
    };

    // Set cache data...
    countryCache.set(name, result);

    return result;
  } catch {
    throw new Error("Error fetching country");
  }
};


export const getCountriesByCodes = async (codes) => {
  const key = codes.join(",");

  if (bordersCache.has(key)) {
    return bordersCache.get(key);
  }

  try {
    const response = await fetch(
      `${API}alpha?codes=${key}&fields=name,cca3`
    );

    const json = await response.json();

    const result = json.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));

    bordersCache.set(key, result);

    return result;
  } catch {
    throw new Error("Error fetching border countries");
  }
};
