const foodUrl = "https://foodish-api.herokuapp.com/api/"
const foodMenu = document.getElementById('food-list');

const NUMBER_OF_IMAGES = 5

document.addEventListener('DOMContentLoaded' , fetchImage)

function fetchImage () {
    for (let i = 0; i < 3; i++) {
        fetch(foodUrl)
        .then(resp => resp.json())
        .then(foodImg => appendToArray(foodImg))
    }
    
}

// Get different images from JSON object
// Assign images to array/Object

function appendToArray (foodObj) {
    
}


// function appendToFoodMenu (food) {
//     let i = 0;
//     while (i < 3) {
//         const imgOfFood = document.createElement('img');
//         imgOfFood.src = food.image;

//         foodMenu.append(imgOfFood);

//         imgOfFood.addEventListener('click', (e) => {
//             e.preventDefault()

//         })

//         i += 1

//     }

// }