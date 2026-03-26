export async function getCountries(){
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region');
    const data = await response.json();

    const countries = data.map(country=>({
        name: country.name.common,
        capital: country.capital ? country.capital[0] : "No capital",
        flag: country.flags.png,
        population: country.population,
        region: country.region
    }))
    return countries;
    
}