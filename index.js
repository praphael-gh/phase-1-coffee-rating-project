
// Food Urls
    // const baseUrl = "https://foodish-api.herokuapp.com/images/"

    // const biryaniUrl = 'biryani/biryani' 
    // const burgerUrl = 'burger/burger'
    // const butter_chickenUrl = 'butter-chicken/butter-chicken'
    // const dessertUrl = 'dessert/dessert'
    // const dosaUrl = 'dosa/dosa'
    // const idlyUrl = 'idly/idly'
    // const pastaUrl = 'pasta/pasta'
    // const pizzaUrl = 'pizza/pizza'
    // const riceUrl = 'rice/rice'
    // const samosaUrl = 'samosa/samosa'

    // const randomNum = (Math.floor(Math.random()* 20) + 1)
    // const jpg = '.jpg'
    // const bottomMenu = document.getElementById('bottom-list');
    // Side Menu
        // function appendToSideMenu () {
        //     const arrayOfFoodNames = [
        //         biryaniUrl, 
        //         burgerUrl, 
        //         butter_chickenUrl, 
        //         dessertUrl, 
        //         dosaUrl, 
        //         idlyUrl, 
        //         pastaUrl, 
        //         pizzaUrl,
        //         riceUrl, 
        //         samosaUrl,
        //     ]
        //     for (const foodNames of arrayOfFoodNames) {
        //         const bottomFood = document.createElement('img');
        //         bottomFood.src = (baseUrl + foodNames + randomNum + jpg)
        //         bottomMenu.append(bottomFood)
        //     }
        // }
const randomFoodUrl = "https://foodish-api.herokuapp.com/api/"
const foodMenu = document.getElementById('food-list');

document.addEventListener('DOMContentLoaded' , fetchImage)

function fetchImage() {
    for (let i = 0; i < 6; i++) {
        fetch(randomFoodUrl)
        .then(resp => resp.json())
        .then(foodImg => appendToFoodMenu(foodImg))
    }
}


function appendToFoodMenu(food) {
        const imgOfFood = document.createElement('img');
        imgOfFood.src = food.image;
        foodMenu.append(imgOfFood);
        imgOfFood.addEventListener('click', (e) => {
            e.preventDefault()
            featureInCenter(food)
        })
    }



    
function submitFoodForm (event) {
    event.preventDefault();
    const userName = document.querySelector('#new-name').value
    const foodAppearanceRating = parseInt(document.querySelector('input#new-rating').value)
    const foodComment = document.querySelector('#new-comment').value

        
    const emptyName = document.querySelector('#name-display')
    const emptyRating = document.querySelector('#rating-display')
    const emptyComment = document.querySelector('#comment-display')

    emptyName.innerText = userName
    emptyRating.innerText = foodAppearanceRating
    emptyComment.innerText = foodComment

}

const button = document.querySelector('#post-bttn');
button.addEventListener('click', submitFoodForm)


function featureInCenter (food) {
    const foodDetail = document.querySelector('#food-detail')
    foodDetail.querySelector('.detail-image').src = food.image
}


function resetButton (event) {
    event.preventDefault();
    // const defaultName = document.querySelector('#new-name').value
    // const defaultRating = parseInt(document.querySelector('input#new-rating').value)
    // const defaultComment = document.querySelector('#new-comment').value
        
    const emptyName = document.querySelector('#name-display')
    const emptyRating = document.querySelector('#rating-display')
    const emptyComment = document.querySelector('#comment-display')

    emptyName.innerText = "Insert Name Here"
    emptyRating.innerText = "Insert rating here"
    emptyComment.innerText = "Insert comment here"

}

const resetForm = document.querySelector('#reset-form-bttn')
resetForm.addEventListener('click', resetButton )


