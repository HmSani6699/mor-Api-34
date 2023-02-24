const loadData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all');
        const data = await res.json();
        displayData(data);
    }
    catch (err) {
        console.log(err)
    }
}
const displayData = (countries) => {
    const container = document.getElementById('allCountries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h2>Name:${country.name}</h2>
        <button onclick="loadDetailsData('${country.name}')">Details</button>
        `
        container.appendChild(div)
    })
}

const loadDetailsData = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetailsData(data[0]))
        .catch(err => console.log(err))
}

const displayDetailsData = (country) => {
    const details = document.getElementById('detailsData');
    details.innerHTML = `
    <img src="${country.flags.png}">
    <h2>${country.name.official}</h2>
    <p>Population:${country.population}</p>
    `
    console.log(country)
}

loadData()