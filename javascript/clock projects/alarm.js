const display= document.querySelector('.clock')
const audio = new Audio ('Black_Sherif.mp3')
const alarm = document.querySelector('.alarm');

audio.loop = true;
 let alarmTime = null;
 let alarmTimeout = null;

function updateTime() {
    const date = new Date ();

    const hour =  formatTime( date.getHours());
    const minutes=  formatTime( date.getMinutes());
    const seconds =  formatTime( date.getSeconds());

    display.innerText= `${hour} : ${minutes} : ${seconds}`;
};





// to get the leading zero for the time

function formatTime(time){
    if (time < 10) {
        return '0' + time
    }

    return time;
}

function setAlarmTime(value){
    alarmTime = value;
    console.log(alarmTime)
}



//audio function
function soundPlay() {
    audio.currentTime=100;
	audio.play();
	console.log(audio.currentTime);
	setInterval(function(){
		if(audio.currentTime>130){
			audio.pause();
				}
			},1000);
   

}
// set time function

function setAlarm(){
    if(alarmTime){
        const current = new Date()
        const timetoAlarm = new Date(alarmTime);

         if(timetoAlarm > current) {
             const timeout = timetoAlarm.getTime() - current.getTime();
             alarmTimeout = setTimeout(soundPlay, timeout
             );
             alert('Alarm set')

             
    
         }




         

    }
}

   


// audio.addEventListener("canplaythrough", event => {
//     /* the audio is now playable; play it if permissions allow */
//     audio.play();
//   });


//clear alarm

function clearAlarm(){
    audio.pause();
    audio.currentTime = 0;
    alarm.value='';

    if (alarmTimeout) {
        clearTimeout(alarmTime)
        alert('Alarm Cleared');
        
    }
    
}



// snooze alarm


function snooze() {
    audio.pause();
    audio.currentTime = 0;
    alarm.value='';

    if (alarmTimeout) {
        clearTimeout(alarmTime);
        
    }
    setTimeout(soundPlay, 2000)
}

//cancel alarm

function cancelAlarm(){
     clearTimeout(alarmTimeout)
     clearAlarm()
}




setInterval(updateTime,1000);