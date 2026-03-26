import { getCountries } from "./api.js";
import { renderCountries } from "./ui.js";

let allcountries = []
async function init(){
  
   const countries = await getCountries();
   renderCountries(countries)
     allcountries = countries
}

init();





const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('regionFilter');
const populationFilter = document.getElementById('populationFilter')

function debouncee( filtroo, tiempoo){
    let temporizadorr;
    return function(e){
        clearTimeout(temporizadorr);
         
        temporizadorr = setTimeout(()=>{
           filtroo(e);
        }, tiempoo);
    }
}
function getfilteredCountries(){
  const search = searchInput.value.trim().toLowerCase();
  const region = regionFilter.value;
  const population = populationFilter.value;

let filtered = allcountries;

if(search !== ''){filtered = filtered.filter(country => country.name.toLowerCase().includes(search));}

if(region !== ''){filtered = filtered.filter(country => country.region === region);}     

if(population !== ''){filtered = filtered.filter(country   => country.population >= Number(population));}

return filtered;
}
 
export function handlerfiltered() {
    const filtered = getfilteredCountries()
    renderCountries(filtered);
}
const debouncehandlres = debouncee(handlerfiltered, 400); 

searchInput.addEventListener('input', debouncehandlres) 
regionFilter.addEventListener('change', handlerfiltered)
populationFilter.addEventListener('change', handlerfiltered)


