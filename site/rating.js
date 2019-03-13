/* Prefix rating when page is loaded */
const ratings = {
    filmOne : 0,
    filmTwo : 0,
    filmThree : 0,
    filmFour : 0,
    filmFive: 0,
    filmSix : 0,
    filmSeven : 0,
    filmEigth : 0,
    oldFilmOne : 0,
    oldFilmTwo : 0,
    oldFilmThree : 0,
    oldFilmFour : 0,
    oldFilmFive : 0,
    oldFilmSix: 0,
    oldFilmSeven : 0,
    oldFilmEigth : 0,
};


const starsTotal = 5; /* Used to calculate procent of the stars that you get from user */


document.addEventListener('DOMContentLoaded', getRatings); /* To get the prefixed rating when DOM is loaded */


/* Getting the control for changing the rating */
const filmSelect = document.getElementById('film-select');
const ratingControl = document.getElementById('rating-control');

const oldfilmSelect = document.getElementById('oldfilm-select');
const oldratingControl = document.getElementById('oldrating-control');

let film; /* stores the current film selected in filmSelect  */
let oldFilm;

// Film select change
filmSelect.addEventListener('change', (e) =>{
    film = e.target.value; /* Gets the value selected in film-select */
    ratingControl.disabled = false; /* Sets the ratingcontrol input area to enabled */
    ratingControl.value = ratings[film]; /* Sets/shows the current rating to the area */
});

oldfilmSelect.addEventListener('change', (e) =>{
    oldFilm = e.target.value;
    oldratingControl.disabled = false;
    oldratingControl.value = ratings[oldFilm];
});
// rating kontroll

ratingControl.addEventListener('input', (e) =>{
    const rating = e.target.value; /* Saves the value you clicked to rating */
   
    if(rating > 5){ 
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[film] = rating; /* assign the new value to the object ratings[] with help of the key */
    
    getRatings(); /* call getratings to display the new value */
});


oldratingControl.addEventListener('input', (e) =>{
    const rating = e.target.value;
    console.log(rating);
    if(rating > 5){
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[oldFilm] = rating;
    getRatings();
    
});





function getRatings(){
   
    for(let rating in ratings){
        
        const starPercentage = (ratings[rating] / starsTotal) * 100; /* Takes the rating and calculates it to decimals */
        //Avrundar
        const starPercentageRounded = `${Math.round(starPercentage/10) * 10}%`; /* rounds the decimals and makes it to procent */
        
        
        /* Sets the width of the class .stars-inner, this makes the star-inner fill over the stars-outer */
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        // Number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}


 