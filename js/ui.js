
function formatPopulation(number) {
    return number.toLocaleString();
}
export function renderCountries(countries) {
    
    const container = document.getElementById('results');
    container.innerHTML = '';
    if(countries.length === 0){
        container.innerHTML = '<p class="no-results">No errors were found.</p>';
        return;
        }

    countries.forEach(country=> {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <img src="${country.flag}" alt="${country.name}" />
                <h3>${country.name}</h3>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Población:</strong> ${formatPopulation(country.population)}</p>
                <p><strong>Región:</strong> ${country.region}</p>
        `

    container.appendChild(card);
    });

} 

