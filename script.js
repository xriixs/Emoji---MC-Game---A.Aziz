// Display random images in each and every block.
// Show all images for 5 sec and then flip the card.
const boxs = document.querySelectorAll('.boxs')
let img2 = []

function boxImages() {
    let images = ['pics/1.jpeg',
        'pics/2.jpeg',
        'pics/3.jpeg',
        'pics/4.jpeg',
        'pics/5.jpeg',
        'pics/6.jpeg',
        'pics/7.jpeg',
        'pics/8.jpeg',
        'pics/9.jpeg',
        'pics/10.jpg'];

    images =[...images,...images] ;
    images.sort(() => 0.7 - Math.random());
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].style.backgroundImage = `url(${images[i]})`;
            boxs[i].style.backgroundSize = 'cover';
            img2.push(images[i])
        }

        setTimeout(() => {
           boxs.forEach((box) => {
            box.style.backgroundImage = ''
            })
            gameActive = true
            timerStart()
          }, 5000)

    } 
boxImages();

const audio = document.querySelector('audio')
function palyAudio() {
    let audio = new Audio("MissonPassed.mp3");
    audio.play();
}

let counter = 0;


// On click of image, display the image and then allow the user to select a second image.
// If both the images matched then they will stay there.
// Else flip them back again.

let click = 0;
let firstImg 
let secondImg
let wrongeImage1
let wrongeImage2
 console.log(boxs)
 for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', function() {
        
        
        click++
        if (click === 1) {
        boxs[i].style.backgroundImage = `url(${img2[i]})`;
        wrongeImage1 = boxs[i]
        firstImg = img2[i];
        console.log("First Image",firstImg)
    }

        
        if (click === 2) {
            boxs[i].style.backgroundImage = `url(${img2[i]})`;
            wrongeImage2 = boxs[i]
            secondImg = img2[i];
            console.log("Second Image",secondImg)

            if (firstImg == secondImg){
                click = 0;
                console.log("Done")
                counter++;
                if (counter == 10){
                    audio.play()
                }

            } else {
                swapImage(wrongeImage1, wrongeImage2);
            }
    }
    })
    
}

function swapImage(wrongeImage1, wrongeImage2){
    const myTimeout = setTimeout(function() {swapBack(wrongeImage1, wrongeImage2)}, 1000);
}

 function swapBack(wrongeImage1, wrongeImage2){
    wrongeImage1.style.backgroundImage = ''
    wrongeImage2.style.backgroundImage = ''
    click = 0;
 }



// timer start ---------------------------------
const ele = document.getElementById('timer');
 const initialseconds = 40;

 let seconds = initialseconds; 
let timer
 const timerStart = () => {

     timer = setInterval(() => {
         seconds --;
         ele.innerHTML = seconds;
    
         if (seconds <= 0){
             clearInterval(timer);
         alert("Game Over!")
     }
     }, 1000);
 }

// timer ends ---------------------------------

// Restart button start ---------------------------------
 const timerElement = document.getElementById('timer');
 const restartButton = document.querySelector('.RestartB button');

 function updateTimer() {
     timerElement.textContent `$(timer) sec`;
     timer --;

     if(timer < 0){
         restartGame();
     } else {
         setTimeout(updateTimer , 1000);
     }
 }

 function restartGame() {
    window.location.reload();
    }

restartButton.addEventListener('click', restartGame);
// Restart button ends ---------------------------------





