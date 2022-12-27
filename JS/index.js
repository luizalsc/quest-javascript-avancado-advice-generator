const button = document.querySelector('a.button')
let displayedIdNumber = document.querySelector('.id-number')
let displayedAdvice = document.querySelector('.quote')

button.addEventListener('click', printAdvice)

async function generateAdvice(){
    const url = "https://api.adviceslip.com/advice"
    const advice = await fetch(url)

    return await advice.json()
}

async function printAdvice(){

    const adviceCard = await generateAdvice()
    const adviceNumber = `${adviceCard.slip.id}`
    const adviceText = `"${adviceCard.slip.advice}"`

    displayedIdNumber.innerHTML = adviceNumber
    displayedAdvice.innerHTML = adviceText
}

