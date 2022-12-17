const next = document.querySelector(".fa-angle-right");
const previous = document.querySelector(".fa-angle-left");
const images = document.querySelectorAll(".image");
let current_photo_index = 0;
next.addEventListener('click', function(){    
    images[current_photo_index].classList.add("none");
    if(current_photo_index < images.length-1){
        current_photo_index++;
        images[current_photo_index].classList.remove("none");
    }
    else{
        current_photo_index = 0;
        images[current_photo_index].classList.remove("none");
        images[images.length - 1].classList.add("none");
    }    
})
previous.addEventListener('click', function(){    
    images[current_photo_index].classList.add("none");
    if(current_photo_index > 0){
        current_photo_index--;
        images[current_photo_index].classList.remove("none");
    }
    else{
        current_photo_index = images.length-1;
        images[current_photo_index].classList.remove("none");
        
    }
})