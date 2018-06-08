function liHandler(eventObject){
    console.log('li click:', eventObject.target);
    eventObject.target.remove();
}

function clickHandler(eventObject){

    // console.log('> button clicked:' + new Date());
    // console.log('> button clicked:' + inputElem.value);
    // to do task
    var task = inputElem.value;

    if(task == "") {
        return;
    }

    var liElem = document.createElement('li');
    //Set the text over
    liElem.textContent = task;
    //delete
    liElem.addEventListener('click', liHandler);
    //append create value
    ulElem.appendChild(liElem);
    //clean the value
    inputElem.value = "";
}

function mosueEnterHandler(){
    console('mouse Enter');
}

var ulElem = document.body.querySelector('#my-todo')
var inputElem = document.body.querySelector('#item');
var addBtnElem = document.body.querySelector('#addBtn')

addBtnElem.addEventListener('click',clickHandler);

