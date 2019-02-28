const ratings = {
    filmOne : 4.2,
    filmTwo : 3.1,
    filmThree : 4.8,
    filmFour : 2.4,
    filmFive: 3.5,
    filmSix : 1.2,
};

const starsTotal = 5;
// Kör getRatings när DOM:en har laddat
document.addEventListener('DOMContentLoaded',getRatings);

const productSelect = document.getElementById('film-select');
const ratingControl = document.getElementById('rating-control');

let film;

// Film select change
productSelect.addEventListener('change', (e) =>{
    film = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[film];
})
// rating kontroll

ratingControl.addEventListener('blur', (e) =>{
    const rating = e.target.value;
    
    if(rating > 5){
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[film] = rating;
    getRatings();
    console.log(ratings); // här kanske spara objectet rating till localstorage.
});

// Hämtar ratings
function getRatings(){
    for(let rating in ratings){
        // ratings till procent
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        //Avrundar
        const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`;
        
        // Sätter width of stars-inner till procent
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        // Number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}
