const hiddenContainer = document.querySelector('.hiddenContainer');
const hidden = document.querySelector('.hidden');
const img = document.querySelector('img');
const x = document.querySelector('#x');
const y = document.querySelector('#y');

function containerSize(){
    hiddenContainer.style.width = img.offsetWidth + 5 + 'px';
    hiddenContainer.style.height = img.offsetHeight + 5 + 'px';
}

addEventListener('resize', containerSize);
containerSize();

setInterval(function(){
    
}, 1000)