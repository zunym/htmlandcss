var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn')

addBtnElem.addEventListener('click', clickHandler())

function clickHandler(eventObject){
    console.log('> button clicked:' + new Date());
}