function createCat(imageName){
    var imgElem = document.createElement('img');
    imgElem.setAttribute('src', imageName);
    imgElem.classList.add('small-cat')
    return(imgElem)
}

var dogs = [
    'https://icon2.kisspng.com/20180523/lfa/kisspng-water-bottles-glass-bottle-plastic-bottle-white-unicorn-5b05456a916be5.6410848315270721065957.jpg', 
    'https://icon2.kisspng.com/20180523/lfa/kisspng-water-bottles-glass-bottle-plastic-bottle-white-unicorn-5b05456a916be5.6410848315270721065957.jpg', 
    'https://icon2.kisspng.com/20180523/lfa/kisspng-water-bottles-glass-bottle-plastic-bottle-white-unicorn-5b05456a916be5.6410848315270721065957.jpg'
]

//Create an image - not in the DOM yet
//Decorate 
//Find the place to attach the element
var hereElem = document.body.querySelector('#here');
var bottle;

for (var i in dogs){
    var d = createCat(dogs[i]);
    hereElem.appendChild(d);

}

// for(var i=0;i<100;i++){
//     if((i%2)==0)
//     bottle = createCat('images/1.jpg');
//     else
//     bottle = createCat('images/1.jpg');

//     hereElem.appendChild(bottle);
// }


// var imgElem = document.createElement('img');
// imgElem.setAttribute('src', 'images/1.jpg');
// var hereElem = document.body.querySelector('#here');
// hereElem.appendChild(imgElem);