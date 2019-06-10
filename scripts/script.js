 function generatePlanetArr () {
    let arr = [];
    for (let i = 1; i < 9; i++) {
        arr.push (`${i}.jpg`);
    }
    return arr;
}

let mainImg = document.querySelector('#bigImg').children[0];	
let roulette = document.querySelector('#roulette');
let imgArr = generatePlanetArr ();
let imgNum = 0;

gallery.addEventListener('click', (evt) => {
    if (evt.target.src) {
        mainImg.src = evt.target.src;
    }
    else if (evt.target.id === 'left') {
        imgNum--;
        if (imgNum < 0){imgNum = 7};
            mainImg.src = `img/${imgArr[imgNum]}`
    } else if (evt.target.id === 'right') {
        imgNum++;
        if (imgNum > 7){imgNum = 0};
        mainImg.src = `img/${imgArr[imgNum]}`
    }
});

function renderPlannetArr () {
    let arr = generatePlanetArr ();
    let str ='';
   

    for (let i=1; i <= arr.length; i++) {
       str += `<img id="image_${i}" src="img/${i}.jpg" alt="planet image"/>`;  
    }
    roulette.innerHTML = str;
}

window.onload = renderPlannetArr();