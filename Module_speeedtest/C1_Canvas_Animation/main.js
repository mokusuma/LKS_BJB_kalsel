const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

c.fillStyle = 'white'

x = 0;

function draw(){
x++;

requestAnimationFrame (draw);
c.clearRect(0,0,canvas.width,canvas.height);
c.beginPath();
c.arc(x, 150, 15, 0, 2*Math.PI )
c.fill();

}

draw();