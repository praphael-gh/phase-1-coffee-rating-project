const randomFoodUrl = "https://foodish-api.herokuapp.com/api/"
// Food Urls
const baseUrl = "https://foodish-api.herokuapp.com/images/"

const biryaniUrl = 'biryani/biryani' 
const burgerUrl = 'burger/burger'
const butter_chickenUrl = 'butter-chicken/butter-chicken'
const dessertUrl = 'dessert/dessert'
const dosaUrl = 'dosa/dosa'
const idlyUrl = 'idly/idly'
const pastaUrl = 'pasta/pasta'
const pizzaUrl = 'pizza/pizza'
const riceUrl = 'rice/rice'
const samosaUrl = 'samosa/samosa'


const randomNum = (Math.floor(Math.random()* 20) + 1)
const jpg = '.jpg'



const foodMenu = document.getElementById('food-list');
const bottomMenu = document.getElementById('bottom-list');

document.addEventListener('DOMContentLoaded' , fetchImage)

function fetchImage () {
    for (let i = 0; i < 5; i++) {
        fetch(randomFoodUrl)
        .then(resp => resp.json())
        .then(foodImg => appendToFoodMenu(foodImg))
    }
}


    
}

function appendToFoodMenu (food) {
        const imgOfFood = document.createElement('img');
        imgOfFood.src = food.image;
        foodMenu.append(imgOfFood);
        imgOfFood.addEventListener('click', (e) => {
            e.preventDefault()
        })
    }
