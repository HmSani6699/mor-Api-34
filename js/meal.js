const loadMealData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealData(data.meals))
}

const displayMealData = (meals) => {
    const container = document.getElementById('meal-container');
    container.innerHTML = ''
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
          <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top"
                        alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                        ${meal.strMeal}</h5>
                    <p class="card-text">
                        This is a longer
                        card with
                        supporting text
                    </p>
                    <button onclick="mealDetailsLoad(${meal.idMeal})" type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Details
                    </button>
                </div>
            </div>
        `;
        container.appendChild(div)
    });

}

const searchMeal = () => {
    const inputFiled = document.getElementById('inout-filed');
    const searchText = inputFiled.value;
    loadMealData(searchText);
    inputFiled.value = ''
}

const mealDetailsLoad = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(res => displayDetails(res.meals[0]))
}

const displayDetails = (meal) => {
    document.getElementById('exampleModalLabel').innerText = meal.strMeal;
    const detailsBody = document.getElementById('details-body');
    detailsBody.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aperiam fuga,  Excepturi quibusdam sunt doloremque delectus sapiente beatae neque ad!</p>
    `
}

