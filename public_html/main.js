/* 
    Author: Mohamed
    Project: Clock Presenter project

    Purpose:
    Here are Javascript codes that are used in HTML section to design the webpage.
*/

// Creating varaibles for connection between javascript code and the HTML code:
// Getting the modal element:
var modal = document.getElementById('alarm-modal');

// Getting the modal button:
var modalopn = document.getElementById('alarmBtn');

// Getting the close button:
var modalcld = document.getElementsByClassName('modalclose')[0];

// Select HTML5 Audio element
var alarmAudio = document.getElementById("alarm-audio");

// Initialize alarm sound
alarmAudio.loop = false;
alarmAudio.pause();

// Listen for the open click on button:
modalopn.addEventListener('click', OpenAlarmModal);

// Listen for the close click on button:
modalcld.addEventListener('click', CloseAlarmModal);

//// Creating functions:
// Opening modal:
function OpenAlarmModal()
{
    modal.style.display = "block";
};

// Closing modal:
function CloseAlarmModal()
{
    modal.style.display = "none";
};

//  Function for displaying the time:
function showClock()
{
    // Creating varaibles for connection between javascript code and the HTML code:
    var clk = document.getElementById("timeclock");
    var datefnc = new Date();
    var hour = datefnc.getHours();
    var minutes = datefnc.getMinutes();
    var seconds = datefnc.getSeconds();
    var AM_PM = "";
    
    // Setting whether it is AM or PM:
    if (hour > 12)
    {
        AM_PM = "PM";
    }
    else
    {
        AM_PM = "AM";
    }
    
    if (hour > 12)
    {
        hour = hour - 12;
    }
    
    if (hour === 0)
    {
        hour = 12;
    }
    var current_time = hour + ":" + minutes + ":" + seconds + " " + AM_PM;

    clk.innerHTML = current_time;
    setInterval(showClock, 1000);
}

//  Function for displaying the date:
function showDate()
{
    // Creating varaibles for connection between javascript code and the HTML code:
    var timedate = document.getElementById("timedate");
    var datefnc = new Date();
    var day = datefnc.getDate();
    var month = (datefnc.getMonth() + 1);
    var year = datefnc.getFullYear();
    var current_date = day + "-" + month + "-" + year;

    timedate.innerHTML = current_date;
}

// Function for clearing the message and assigned alarm:
function clearalarm()
{
    const container = document.getElementById('alarm-text');
    var messgaetext = document.getElementById("active-alarm");
    var messgaeclrbtn = document.getElementById("ClearAlarm");
    const selectmenu = document.querySelectorAll("select");
    var btn = document.getElementById('SetAlarm');
    var btn2 = document.getElementById('alarmBtn');
    var alarmhr = selectmenu[0].value;
    var alarmmin = selectmenu[1].value;
    var alarmper = selectmenu[2].value;
    var alarmtime = alarmhr + ":" + alarmmin + " " + alarmper;
    
    // This part will reset the selection and hide the alarm message container
    messgaeclrbtn.style.visibility = 'hidden';
    container.textContent = '';
    messgaetext.style.display = "none";
    btn2.setAttribute("disabled", false);
    modalopn.setAttribute("disabled", false);
    modalopn.removeAttribute("disabled");
    selectmenu[0].selectedIndex = 0;
    selectmenu[1].selectedIndex = 0;
    selectmenu[2].selectedIndex = 0;
    
    // Checking whether time has been inserted or not:
    if (alarmtime.includes("Hour") || alarmtime.includes("Minutes") || alarmtime.includes("timeperiod")) 
    {
        modalopn.setAttribute("disabled", false);
        modalopn.removeAttribute("disabled");
        btn.setAttribute("disabled", false);
        btn.removeAttribute("disabled");
    }
    
    // This part will reset the buttons:
    btn2.setAttribute("disabled", false);
    modalopn.setAttribute("disabled", false);
    modalopn.removeAttribute("disabled");
    btn.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
    
    // Select HTML5 Audio element
    const alarmAudio = document.getElementById("alarm-audio");
    alarmAudio.loop = false;
    alarmAudio.pause();
}

// Functions for setting up the alarm:
function setalarm()
{
    modal.style.display = "none";
    
    // Creating a select menu varaibles:
    const selectmenu = document.querySelectorAll("select");
    const container = document.getElementById('alarm-text');
    var alarmhr = selectmenu[0].value;
    var alarmmin = selectmenu[1].value;
    var alarmper = selectmenu[2].value;
    var alarmtime = alarmhr + ":" + alarmmin + " " + alarmper;
    var messgaetext = document.getElementById("active-alarm");
    var messgaeclrbtn = document.getElementById("ClearAlarm");
    messgaetext.style.display = "block";
    
    // Select HTML5 Audio element
    const alarmAudio = document.getElementById("alarm-audio");
    
    // Initialize alarm sound
//    alarmAudio.src = "ringtones/Terry Crews Alarm Clock.mp3";
    alarmAudio.src = "ringtones/Alarm clock.mp3";
    alarmAudio.type = 'audio/mp3';
    alarmAudio.loop = false;
    
    // Setting whether it is AM or PM:
    if (alarmhr > 12)
    {
        alarmhr = alarmhr - 12;
    }
    
    if (alarmhr === 0)
    {
        alarmhr = 12;
    }

    // Checking whether time has been inserted or not:
    if (alarmtime.includes("Hour") || alarmtime.includes("Minutes") || alarmtime.includes("timeperiod")) 
    {
        // Creating a message which is time:
        container.textContent = '';
        let errormessage = "Please, select a valid time to set Alarm!";
        var alarmmsg = document.getElementById("alarm-text");
        alarmmsg.innerHTML += errormessage;
        messgaeclrbtn.style.visibility = 'visible';
    }
    else
    {    
        // Creating a message which is time:
        container.textContent = '';
        let message = "\n"+ alarmtime + " is set<br>";
        var alarmmsg = document.getElementById("alarm-text");
        alarmmsg.innerHTML += message;
        modalopn.setAttribute("disabled", true);
        var btn = document.getElementById('SetAlarm');
        btn.setAttribute("disabled", true);
        messgaeclrbtn.style.visibility = 'visible';
    }
    
    // Creating Varaibles for setting up the current time:
    var datefnc = new Date();
    var hour = datefnc.getHours();
    var minutes = datefnc.getMinutes();
    var AM_PM = "";
    
    // Setting whether it is AM or PM:
    if (hour > 12)
    {
        AM_PM = "PM";
    }
    else
    {
        AM_PM = "AM";
    }
    
    if (hour > 12)
    {
        hour = hour - 12;
    }
    
    if (hour === 0)
    {
        hour = 12;
    }
    var current_time = hour + ":" + minutes + " " + AM_PM;
    
    // Creating a message which is time:
    let message = "\n"+ current_time + " is current time<br>";
    var alarmmsg = document.getElementById("alarm-text");
    alarmmsg.innerHTML += message;
    
    // Creating a message which is time:
    let message2 = "\n"+ alarmtime + " is alarm time<br>";
    var alarmmsg = document.getElementById("alarm-text");
    alarmmsg.innerHTML += message2;
    
    // Check whether the alramtime and current time are equal:
    if(alarmtime === current_time)
    {
        // Creating a message which is time:
        container.textContent = '';
        let message = "alarm is ringing....";
        var alarmmsg = document.getElementById("alarm-text");
        alarmmsg.innerHTML += message;
        // Initialize alarm sound
        alarmAudio.load();
        alarmAudio.play();
        alarmAudio.loop = true;
    }
    setInterval(setalarm, 1000);
}

// Creating a drop list for hours:
var selector_hr = document.getElementById('select1');
var opt_hr = "<option>Hour</option>";
selector_hr.innerHTML = opt_hr;
for (var hr = 1; hr <= 12; hr++)
{
        opt_hr += "<option>"+ hr +"</option>";
}
selector_hr.innerHTML = opt_hr;

// Creating a drop list for minutes:
var selector_min = document.getElementById('select2');
var opt_min = "<option>Minutes</option>";
selector_min.innerHTML = opt_min;
for (var min = 1; min <= 59; min++)
{
        opt_min += "<option>"+ min +"</option>";
}
selector_min.innerHTML = opt_min;

//  Executing the Functions:
showClock();
showDate();