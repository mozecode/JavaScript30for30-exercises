'use strict';

const secondHand = document.querySelector('.second-hand');//find item with class of second-hand
const minsHand = document.querySelector('.min-hand');//find item with class of min-hand
const hourHand = document.querySelector('.hour-hand');//find item with class of hour-hand

function setDate(){
    const now = new Date();
    const seconds= now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360)+ 90;//add 90 to compensate for the transform we added to the css to start at the 12 noon position

    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    //add a style to element with class second-hand --transform rotate by however many seconds degrees you have above
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360)+90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;


}
setInterval(setDate,1000);//fire off every second
