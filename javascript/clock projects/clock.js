

const first = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second= document.querySelector('.second');
const  day = document.querySelector('.date');  
const  total = document.querySelector('.total')






function getTime() {

    const  date= new Date();
    

    const today = date.getDate();

    const hour = timeFormat(date.getHours());
    const minutes = timeFormat(date.getMinutes());
    const seconds = timeFormat(date.getSeconds());


    first.innerText= `${hour} :`;
    minute.innerText= `${minutes} :`;
    second.innerText= `${seconds}`;

    day.innerText =date.toString().split(' ').splice(1,3).join(' ')   ;

    
    
}



function timeFormat(time) {
    if(time < 10){
        return '0' + time
    }

    return time
}



// function to loop and add the total

function sum(value){

    let add =0;
    for (i=0; i<=value; i++){
        add += i;

       



    }

    console.log(add)

    total.innerHTML = `Total :${add}`;
    total.classList='date'
  

}

sum(10);


setInterval(getTime,1000)