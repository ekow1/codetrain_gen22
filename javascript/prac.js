
const button = document.querySelector('#btn');
const count= document.querySelector('#counter');
const decrement = document.querySelector('#decree');
const date = document.querySelector('.date');
const time = document.querySelector('.time');


let counter = 0;
let d =new Date();

function counterIncrement (){

    
    counter++

    count.innerHTML= counter;
     if (counter === 0) {

        count.style.color='white';

     }
     else{
        count.style.color='yellow';
     }
   

}

button.addEventListener('click', counterIncrement)

function counterdecrement (){
    counter--

    count.innerHTML= counter;
    if (counter === 0) {

        count.style.color='white';

     }
     else{
        count.style.color='black';
     }
   

}

decrement.addEventListener('click', counterdecrement)



date.innerHTML= d.toLocaleDateString();


