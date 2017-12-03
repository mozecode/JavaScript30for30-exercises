'use strict';

function playSound(event){
    const audio= document.querySelector(`audio[data-key="${event.keyCode}"`);//use css attribute selector with[]
    //don't forget "" around the string template literal, or it won't recognize it

    //find element with class of key that has the key code of the key being struck, if any
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`);

    if (!audio) return;//stop if there's no element with that keycode
    //rewind to start each time it's hit so it will do it as many times as you hit it
    audio.currentTime=0;
    audio.play();

    key.classList.add('playing'); //add playing class to div to add border and grow it by 10%, but need to also remove it with transition end event
}
function removeTransition(event){
    //multiple transitions happened, and need to be reverted
    if(event.propertyName !== 'transform') return;//skip if it's not a transform.
    //"this" is the div (console log it to see)
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');  //save array of all items on the page with the class key into variable "keys"

//loop over those keys and add an event listener to remove the class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//on keydown, find the audio element with the data-key that equals the key code of the key being struck & play the sound.
window.addEventListener('keydown', playSound);