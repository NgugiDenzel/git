var button = document.querySelector('#btn')
para = document.querySelector("#para")
image = document.querySelector(".dice")

image.onclick = getAdvice;





function getAdvice(){
fetch('https://api.adviceslip.com/advice')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        var advice = data.slip.advice;
        para.innerHTML =  advice
    });
}
