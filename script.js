const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const startbutton = document.getElementById("start");
const time = document.getElementsByClassName("time");
const dtimer = document.getElementById("display");


//hide the countdown timer
dtimer.style.display = "none";

function allowInput() {
    dtimer.style.display="none";
    for (var i=0; i<time.length; i++){
        time[i].style.display = "flex";
    }
}

//change display text
function formatDisplay(min, sec){
    var min_str = String(min);
    var sec_str = String(sec);
    if(sec < 10){
        sec_str = "0" + sec_str;
    }
    dtimer.textContent = min_str + ":" + sec_str;
}

startbutton.addEventListener('click', () => {

    var mins = Minutes.value;
    var secs = Seconds.value;

    //check for validity of inputs
    if (mins==""){Minutes.value = "00"};
    if (secs==""){Seconds.value = "00"};

    var minute = Number(mins);
    var second = Number(secs);


    dtimer.style.display = "flex";
    formatDisplay(minute, second);
    //hide the input display after start
    for (var i=0; i<time.length; i++){
        time[i].style.display = "none";
    }

    var x = setInterval(() => {
        if (second == 0){
            if (minute > 0){
                minute = minute - 1;
                second = 59;
            }
            else {
                clearInterval(x);
                allowInput();}
        }
        else{second = second - 1;}
        formatDisplay(minute, second);
    
    }, 1000)
    
})