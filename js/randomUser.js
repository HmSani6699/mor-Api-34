const loadData = () => {
    fetch('https://randomuser.me/api/?gender=male')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    const imgSrc = document.getElementById('imgSrc');
    imgSrc.setAttribute('src', `${data.results[0].picture.medium}`);

    document.getElementById('name').innerHTML = `${data.results[0].name.first} ${data.results[0].name.last} ${data.results[0].name.title}`;

    document.getElementById('email').innerHTML = data.results[0].email;

    document.getElementById('phone').innerHTML = data.results[0].phone;

    document.getElementById('city').innerHTML = data.results[0].location.city;

    document.getElementById('gender').innerHTML = data.results[0].gender;

}
loadData()