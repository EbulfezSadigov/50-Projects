var progress = document.querySelector("#progress")
var prev = document.querySelector("#prev")
var next = document.querySelector("#next")
const circles = document.querySelectorAll(".circle");

var currentValue = 1;

next.addEventListener('click',()=>{
    currentValue++;
    if (currentValue>circles.length) {
        currentValue = circles.length;
    }

    update();
})

prev.addEventListener('click',()=>{
    currentValue--;
    if (currentValue<1) {
        currentValue = 1;
    }

    update();
})


function update() {
    circles.forEach((circle,index)=>{
        if (index<currentValue) {
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
        console.log(index);
    })

    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length-1) / (circles.length-1)*100 +'%';

    if (currentValue===1) {
        prev.disabled=true;
    }
    else if(currentValue === circles.length){
        next.disabled=true;
    }
    else{
        prev.disabled=false
        next.disabled=false
    }
}
