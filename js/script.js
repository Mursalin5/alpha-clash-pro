
//  this for one system.


// function play(){
//     // hide the home screen .to hide the screen and the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList)

//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


// this is for system two with function(utility)
// function handleKeyBoardButtonPress(){
//     console.log('button press');
// }
// //capture keyboard press
// document.addEventListener('keyup',handleKeyBoardButtonPress)
// document.addEventListener('keyup',)


function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed',playerPressed);
    //get the expected to press

    const currentAlphabetElement =document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // const playedPress
    if(playerPressed === expectedAlphabet){
        console.log('you win');
    }
    else{
        console.log('missed the letter.you lost a life');
    }
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent)




function continueGame(){
    //step:1- generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your Random alphabet',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set backGrounded color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}