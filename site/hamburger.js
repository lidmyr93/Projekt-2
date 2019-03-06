/* hamburger */
const nav = document.querySelector('nav');
const menyknapp = document.querySelector('.hamburger');

menyknapp.addEventListener('click', toggleMenu);


function toggleMenu() {
    nav.classList.toggle('show-nav');
    menyknapp.innerHTML = (menyknapp.innerHTML == '☰') ? '&#10761;' : '&#9776';
}
/* Hamburger ends */

/* controls for voting */
const voting = document.querySelector('.show-vote');
const voteknapp = document.querySelector('.vote-button');

voteknapp.addEventListener('click', toggleVote);


function toggleVote() {
    voting.classList.toggle('vote');
    voteknapp.innerHTML = (voteknapp.innerHTML == 'Rösta') ? '&#10761;' : 'Rösta';
}
/* controls for voting ends */