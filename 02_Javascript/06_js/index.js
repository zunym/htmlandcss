
function createBottle(numOfBottle){
    var divElem = document.createElement('div');
    for(var i =0; i<numOfBottle;i++){
        var imgElem = document.createElement('img');
        imgElem.setAttribute('src','beer.jpg');
        imgElem.classList.add('small');
        divElem.appendChild(imgElem);
    }
    return (divElem);
}

function createText(line){
    var divElem = document.createElement('div');
    divElem.textContent=line;
    return(divElem);
}
var beerSong = document.body.querySelector('#beer-song');
for(var i =99; i>0;i--){
    var pElem = document.createElement('p');
    var bottle = createBottle(i);
    pElem.appendChild(bottle);
    var text = createText(`${i} bottles of beer on the wall, ${i} bottles of beer`);
    pElem.appendChild(text);

    var text = createText(`Take one down and pass it around, ${i-1} bottles of beer`);
    pElem.appendChild(text);   
    beerSong.appendChild(pElem);
}



