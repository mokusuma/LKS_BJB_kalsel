const timer = document.querySelector('.timer')
const centi = document.querySelector('.centi')
const second = document.querySelector('.second')


let x = 0;
let y =0;

// fungsi untuk menjalankan timer
function start(){
startTimer = setInterval( function(){
        x++;

        // mancetak timer pada layar
        centi.textContent = x;
        second.textContent = y;

        // mereset x menjadi 0 jika lebih dari 100
        if(x>100){
            y++;
            x = 0;
        }

        // menambah angka 0 jika y kurang dari 10
        if(y<10){
            second.textContent = '0' + '0' + y;
        }
        // mengurangi angka 0 menjadi 1 jika y lebih dari 10
        if(y>=10){
            second.textContent = '0' + y;
        }
        // hanya menuliskan y jika y telah menjadi 3 digit
        if(y>99){
            second.textContent =   y;
        }
        // menghentikan timer jika timer mencapai 999:59
        if(y === 999 && x=== 65){
            clearInterval(startTimer);
        }

    },10)
}

// fungsi untuk melakukan pause
function stop(){
    clearInterval(startTimer);
}

// fungsi untuk melakukan reset
function reset(){
    y = 0;
    x = 0;
    centi.textContent = '0' + x;
    second.textContent = '0' + '0' + y;
}
    