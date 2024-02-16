
//  this for one system.---------------------------


// function play(){
//     // hide the home screen .to hide the screen and the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList)

//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


// this is for system two with function(utility)--------------------
// function handleKeyBoardButtonPress(){
//     console.log('button press');
// }
// //capture keyboard press
// document.addEventListener('keyup',handleKeyBoardButtonPress)
// document.addEventListener('keyup',)


function handleKeyBoardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    //get the expected to press

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // const playedPress
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');

        const currentScore = getTextElementValueById('current-score')
        console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);
        // console.log('you have pressed correctly', expectedAlphabet);
        //update score--------
        // // 1. get the current score
        //-----------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the update score 
        // currentScoreElement.innerText = newScore;
        //------------------------------------------------------------------------
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('missed the letter.you lost a life')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // step-1: get the current life number
        //--------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife - 1;
        // // display the update life count
        // currentLifeElement.innerText = newLife;
        //---------------------------------------habijabi code

        // if (newLife === 0, function gameOver() {
        //     hideElementById('play-ground');

        // }) {
        //     gameOver();
        // }
        // if (newLife === 0) {
        //     const playGroundSection = document.getElementById('play-ground');
        //     playGroundSection.classList.add('hidden');
        // }
        //-------------------------------------------

    }

}


document.addEventListener('keyup', handleKeyBoardKeyUpEvent)



function continueGame() {
    //step:1- generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backGrounded color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}