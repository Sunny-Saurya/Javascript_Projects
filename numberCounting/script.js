let valueDisplays = document.querySelectorAll(".num")
let interval = 5000;

valueDisplays.forEach(valueDisplays =>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"))
    console.log(endValue)

    let duration = Math.floor(interval / endValue)
    let counter = setInterval(() => {
        startValue += 1;
        valueDisplays.textContent = startValue;

        if(startValue == endValue){
            clearInterval(counter)
        }

    },duration)

})