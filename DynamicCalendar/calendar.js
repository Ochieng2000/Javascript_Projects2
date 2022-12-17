const currentDate = document.querySelector(".current_date"),
day_lists = document.querySelector(".day_lists"),
prev = document.querySelector(".fa-angle-left"),
next = document.querySelector(".fa-angle-right")
;

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
    
let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
let today = date.getDate()

function setCalendar(){        
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();    
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    let dates = "";
    for(let i = firstDayOfMonth; i > 0 ; i--){
        dates += `<li class = "inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    for(let i = 1; i <= lastDateOfMonth; i++){
        if(i === today && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()){
            dates += `<li class = "active">${i}</li>`;
        }
        else{
            dates += `<li>${i}</li>`;
        }       
    }   
    for(let i = lastDayOfMonth; i < 6 ; i++){
        dates += `<li class = "inactive">${i - lastDayOfMonth + 1}</li>`;
    } 

    currentDate.textContent = `${months[currentMonth]} ${currentYear}`;
    day_lists.innerHTML = dates;
}

function setNewYear(){
    if(currentMonth < 0 || currentMonth > 11){
        date = new Date(currentYear, currentMonth);
        currentYear = date.getFullYear();
        currentMonth = date.getMonth();
    }
    else{
        date = new Date();
    }
}

next.addEventListener('click', function(){
    currentMonth ++;    
    setNewYear();
    setCalendar();
})
prev.addEventListener('click', function(){
    currentMonth-- ;    
    setNewYear();
    setCalendar();
})

setCalendar();



