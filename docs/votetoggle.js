/* Get the hidden divs */
const votingOne = document.querySelector('.show-vote-one');
const votingTwo = document.querySelector('.show-vote-two');

/* Buttons for toggle */
const voteButtonOne = document.querySelector('.vote-button-one');
const voteButtonTwo = document.querySelector('.vote-button-two');


/* function calls */
voteButtonOne.addEventListener('click', toggleVoteOne);
voteButtonTwo.addEventListener('click', toggleVoteTwo);

/* Geting inner content of the buttons so ternary operator is typed shorter  */
let innerTextOne = document.querySelector('.vote-button-one').innerHTML;
let innerTextTwo = document.querySelector('.vote-button-two').innerHTML;
let exit = 'Stäng röstningen';



/* functions */
function toggleVoteOne() {
    
    votingOne.classList.toggle('vote');
    voteButtonOne.innerHTML = (voteButtonOne.innerHTML == innerTextOne) ? exit : innerTextOne;
}
function toggleVoteTwo(){

    votingTwo.classList.toggle('vote');
    voteButtonTwo.innerHTML = (voteButtonTwo.innerHTML == innerTextTwo) ? exit : innerTextTwo;
}
