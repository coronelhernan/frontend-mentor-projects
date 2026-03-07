/**
 * countries.js
 * -------------------
 * Este módulo se encarga de manejar todas las peticiones a la API de
 * Rest Countries y de transformar los datos recibidos en un formato
 * más simple para la aplicación.
 *
 * También implementa un sistema de cache en memoria utilizando `Map`
 * para evitar realizar múltiples peticiones innecesarias a la API.
 *
 * API utilizada: https://restcountries.com
 */

const API = `https://restcountries.com/v3.1/`;

// Cache para la lista completa de países
const countriesCache = new Map();

// Cache para el detalle de países individuales 
const countryCache = new Map();

// Cache para los países fronterizos:
const bordersCache = new Map();

/**
 * getCountries
 * ------------
 * Obtiene la lista completa de países desde la API.
 *
 * Funcionamiento:
 * 1. Primero verifica si los datos ya existen en cache.
 * 2. Si existen, devuelve los datos cacheados.
 * 3. Si no existen, realiza una petición a la API.
 * 4. Ordena los países alfabéticamente.
 * 5. Normaliza los datos para que la aplicación solo use las propiedades necesarias.
 * 6. Guarda el resultado en cache.
 *
 * Retorna:
 * Array de países con los campos:
 * - name
 * - flag
 * - population
 * - region
 * - capital
 */

export const getCountries = async () => {

  // Verificar si ya existen datos en cache
  if (countriesCache.has("all")) {
    return countriesCache.get("all");
  }

  try {
    const response = await fetch(
      `${API}all?fields=name,flags,population,region,capital`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

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

    // Guardar resultado en cache
    countriesCache.set("all", result);

    return result;

  } catch {
    throw new Error("Error fetching countries");
  }
};

/**
 * getCountryByName
 * ----------------
 * Obtiene el detalle completo de un país específico utilizando su nombre.
 *
 * Funcionamiento:
 * 1. Verifica si el país ya fue consultado previamente.
 * 2. Si existe en cache, devuelve el resultado guardado.
 * 3. Si no existe, realiza una petición a la API.
 * 4. Normaliza los datos para que coincidan con la estructura utilizada por la aplicación.
 * 5. Guarda el resultado en cache.
 *
 * Parámetros:
 * - name: nombre del país
 *
 * Retorna:
 * Objeto con la información detallada del país.
 */

export const getCountryByName = async (name) => {

  // Verificar cache
  if (countryCache.has(name)) {
    return countryCache.get(name);
  }

  try {
    const response = await fetch(
      `${API}name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const json = await response.json();
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

    // Guardar en cache
    countryCache.set(name, result);

    return result;

  } catch {
    throw new Error("Error fetching country");
  }
};

/**
 * getCountriesByCodes
 * -------------------
 * Obtiene información de países a partir de sus códigos CCA3.
 * Se utiliza principalmente para mostrar los países fronterizos.
 *
 * Funcionamiento:
 * 1. Genera una clave única a partir del array de códigos.
 * 2. Verifica si la consulta ya fue realizada previamente.
 * 3. Si existe en cache, devuelve el resultado almacenado.
 * 4. Si no existe, realiza la petición a la API.
 * 5. Transforma los datos a un formato simple.
 * 6. Guarda el resultado en cache.
 *
 * Parámetros:
 * - codes: array de códigos de países (ej: ["FRA", "DEU"])
 *
 * Retorna:
 * Array de objetos con:
 * - name
 * - code
 */

export const getCountriesByCodes = async (codes) => {

  // Crear clave única para el cache
  const key = codes.join(",");

  if (bordersCache.has(key)) {
    return bordersCache.get(key);
  }

  try {
    const response = await fetch(
      `${API}alpha?codes=${key}&fields=name,cca3`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const json = await response.json();

    // Normalizar datos
    const result = json.map((country) => ({
      name: country.name.common,
      code: country.cca3,
    }));

    // Guardar en cache
    bordersCache.set(key, result);

    return result;

  } catch {
    throw new Error("Error fetching border countries");
  }
};
