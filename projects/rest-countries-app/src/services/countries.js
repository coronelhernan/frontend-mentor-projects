const API = `https://restcountries.com/v3.1/`;
const getCountriesRequest = `${API}all?fields=name,flags,population,region,capital`;

export const getCountries = async () => {
  try {
    const response = await fetch(getCountriesRequest);
    const data = await response.json();
    const sortedData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common),
    );

    return sortedData.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
      capital: country.capital?.[0] ?? "No capital",
    }));
  } catch {
    throw new Error("Error fetching countries");
  }
};

export const getCountryByName = async (name) => {
  try {
    const response = await fetch(
      `${API}name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,
    );

    const json = await response.json();
    const country = json[0];

    return {
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
  } catch {
    throw new Error("Error fetching country");
  }
};

export const getCountriesByCodes = async (codes) => {
  try {
    const response = await fetch(`${API}alpha?codes=${codes.join(",")}&fields=name`,);
    const json = await response.json();

    return json.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));
    
  } catch {
    throw new Error("Error fetching border countries");
  }
};
