const lodeData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    const code = document.getElementById('code');
    code.innerHTML = `
    <h3>${data.quote}</h3>
    `
}