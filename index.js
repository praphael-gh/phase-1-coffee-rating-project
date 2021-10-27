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


function appendToFoodMenu (food) {
        const imgOfFood = document.createElement('img');
        imgOfFood.src = food.image;
        foodMenu.append(imgOfFood);
        imgOfFood.addEventListener('click', (e) => {
            e.preventDefault()
            featureInCenter(food)
        })
    }


function appendToSideMenu () {
    const arrayOfFoodNames = [
        biryaniUrl, 
        burgerUrl, 
        butter_chickenUrl, 
        dessertUrl, 
        dosaUrl, 
        idlyUrl, 
        pastaUrl, 
        pizzaUrl,
        riceUrl, 
        samosaUrl,
    ]
    for (const foodNames of arrayOfFoodNames) {
        const bottomFood = document.createElement('img');
        bottomFood.src = (baseUrl + foodNames + randomNum + jpg)
        bottomMenu.append(bottomFood)
    }
}

appendToSideMenu()


function submitFoodForm (event) {
    event.preventDefault();
    const userName = document.querySelector('input#new-name').value
    const foodAppearanceRating = document.querySelector('input#new-rating').value
    const foodComment = document.querySelector('#new-comment').value

    const emptyName = document.querySelector('#display-name')
    const emptyRating = document.querySelector('#rating-display')
    const emptyComment = document.querySelector('#comment-display')

    emptyName.innerText(userName)
    emptyRating.innerText(foodAppearanceRating)
    emptyComment.innerText(foodComment)
}


const form = document.querySelector('#post-btn');
form.addEventListener('submit', submitFoodForm)


function featureInCenter (food) {
    const foodDetail = document.querySelector('#food-detail')
    console.log(foodDetail.querySelector('.detail-image').src = food.image)
}

// function addDetailsToFeatured () {
// }
