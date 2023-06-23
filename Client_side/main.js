const username = document.querySelector('#name');
const welcome = document.querySelector('.welcome');
const playButton = document.querySelector('.play')


function play(){
    welcome.style.display = 'none' 

    if(!username.value){

        welcome.style.display = 'grid' 
    }
}

play();