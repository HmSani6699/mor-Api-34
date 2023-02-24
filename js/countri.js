// console.log('all countries')
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (countries) => {
    const container = document.getElementById('allCountries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h2>Name: ${country.name.common}</h2>
        <p>Capital:${country.capital}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        container.appendChild(div)
    });
}

const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    console.log(country)
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
    <img src="${country.flags.png}">
    `
}

loadData()