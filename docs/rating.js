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

ratingControl.addEventListener('click', (e) =>{
    const rating = e.target.value; /* Saves the value you clicked to rating */
   
    if(rating > 5){ 
        alert('Rösta bara mellan 1 och 5')
        return;
    }
    ratings[film] = rating; /* assign the new value to the object ratings[] with help of the key */
    
    getRatings(); /* call getratings to display the new value */
});


oldratingControl.addEventListener('click', (e) =>{
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


 