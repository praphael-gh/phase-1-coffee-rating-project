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
        
    const emptyName = document.querySelector('#name-display')
    const emptyRating = document.querySelector('#rating-display')
    const emptyComment = document.querySelector('#comment-display')

    emptyName.innerText = "Insert Name Here"
    emptyRating.innerText = "Insert rating here"
    emptyComment.innerText = "Insert comment here"

}

const resetForm = document.querySelector('#reset-form-bttn')
resetForm.addEventListener('click', resetButton )


