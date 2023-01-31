const inputText = document.querySelector(`.input-text`)
const increaseButton = document.querySelector(`.increase-button`)
const decreaseButton = document.querySelector(`.decrease-button`)
let value = 16

increaseButton.addEventListener("click",()=>{
    value +=2
    inputText.style = `font-size:${value}px`
})
decreaseButton.addEventListener("click", ()=>{
    value -= 2
    inputText.style = `font-size:${value}px`
})