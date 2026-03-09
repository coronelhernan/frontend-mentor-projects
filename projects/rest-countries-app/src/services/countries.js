/**
 * countries.js *
 * Servicio encargado de interactuar con la API de países.
 *
 * Responsabilidades:
 * - Realizar peticiones a la API de Rest Countries
 * - Normalizar los datos recibidos
 * - Implementar cache en memoria usando Map
 *
 * API: https://restcountries.com
 */

const BASE_URL = "https://restcountries.com/v3.1/";

// Cache para la lista completa de países
const countriesCache = new Map();

// Cache para el detalle de países individuales 
const countryCache = new Map();

// Cache para los países fronterizos:
const bordersCache = new Map();

/**
 * Obtiene la lista completa de países.
 *
 * - Utiliza cache si los datos ya fueron solicitados.
 * - Ordena los países alfabéticamente.
 * - Devuelve solo las propiedades necesarias para la aplicación.
 *
 * @returns {Array} Lista de países
 */

const fetchJSON = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return await response.json();
};

/**
 * Obtiene la lista completa de países.
 *
 * - Utiliza cache si los datos ya fueron solicitados.
 * - Ordena los países alfabéticamente.
 * - Devuelve solo las propiedades necesarias para la aplicación.
 *
 * @returns {Array} Lista de países
 */

export const getCountries = async () => {
  // Verificar si ya existen datos en cache
  if (countriesCache.has("all")) {
    return countriesCache.get("all");
  }

  try {
    const data = await fetchJSON(`${BASE_URL}all?fields=name,flags,population,region,capital`);

    // Ordenar países alfabéticamente por nombre
    const sortedData = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    // Transformar la respuesta de la API a un formato más simple
    const result = sortedData.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
      capital: country.capital?.[0] ?? "No capital",
    }));

    countriesCache.set("all", result);

    return result;
  } catch {
    throw new Error("Error fetching countries");
  }
};

/**
 * Obtiene la información detallada de un país por su nombre.
 * Los resultados se almacenan en cache para evitar múltiples peticiones a la API.
 *
 * @param {string} name Nombre del país
 * @returns {Object} Información del país
 */

export const getCountryByName = async (name) => {
  // Verificar cache
  if (countryCache.has(name)) {
    return countryCache.get(name);
  }

  try {
    const json = await fetchJSON(`${BASE_URL}name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
    const country = json[0];

    // Normalizar datos
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

    countryCache.set(name, result);

    return result;
  } catch {
    throw new Error("Error fetching country");
  }
};

/**
 * Obtiene países a partir de sus códigos CCA3.
 * Se utiliza principalmente para mostrar los países fronterizos.
 *
 * La consulta se almacena en cache utilizando
 * una clave generada a partir del array de códigos.
 *
 * @param {string[]} codes Códigos de países
 * @returns {Array} Países fronterizos
 */

export const getCountriesByCodes = async (codes) => {
  // Crear clave única para el cache
  const key = codes.join(",");

  if (bordersCache.has(key)) {
    return bordersCache.get(key);
  }

  try {
    const json = await fetchJSON(`${BASE_URL}alpha?codes=${key}&fields=name,cca3`);

    // Normalizar datos
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
