const foodUrl = "https://foodish-api.herokuapp.com/api/"
const foodMenu = document.getElementById('food-list');

document.addEventListener('DOMContentLoaded' , fetchImage)

function fetchImage () {
    for (let i = 0; i < 3; i++) {
        fetch(foodUrl)
        .then(resp => resp.json())
        .then(foodImg => appendToFoodMenu(foodImg))
    }
}

function appendToFoodMenu (food) {
    const imgOfFood = document.createElement('img');
    imgOfFood.src = food.image;
    imgOfFood.addEventListener('click', (e) => {
        e.preventDefault()
    }) 
    foodMenu.append(imgOfFood);
}