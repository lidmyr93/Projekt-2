/* Prefix rating when page is loaded */
const ratings = {
    filmOne : 4.2,
    filmTwo : 3.1,
    filmThree : 4.8,
    filmFour : 2.4,
    filmFive: 3.5,
    filmSix : 1.2,
    filmSeven : 3.2,
    filmEigth : 2.1,
    oldFilmOne : 4.4,
    oldFilmTwo : 4.1,
    oldFilmThree : 3.5,
    oldFilmFour : 2.5,
    oldFilmFive : 2.0,
    oldFilmSix: 1.2,
    oldFilmSeven : 4.3,
    oldFilmEigth : 4.9,
};


const starsTotal = 5; /* Used to calculate procent of the stars that you get from user */


document.addEventListener('DOMContentLoaded', getRatings); /* To get the prefixed rating when DOM is loaded */


/* Getting the control */
const productSelect = document.getElementById('film-select');
const ratingControl = document.getElementById('rating-control');

const oldproductSelect = document.getElementById('oldfilm-select');
const oldratingControl = document.getElementById('oldrating-control');

let film;

// Film select change
productSelect.addEventListener('change', (e) =>{
    console.log(e);
    film = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[film];
});
oldproductSelect.addEventListener('change', (e) =>{
    film = e.target.value;
    oldratingControl.disabled = false;
    oldratingControl.value = ratings[film];
});
// rating kontroll

ratingControl.addEventListener('click', (e) =>{
    const rating = e.target.value;
    console.log(rating);
    if(rating > 5){
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[film] = rating;
    getRatings();
    
});


oldratingControl.addEventListener('click', (e) =>{
    const rating = e.target.value;
    console.log(rating);
    if(rating > 5){
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[film] = rating;
    getRatings();
    
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


 