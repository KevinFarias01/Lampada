const turnOn = document.getElementById('turnOn');

const turnOff = document.getElementById('turnOff');

const lamp = document.getElementById('lamp');


function lampadaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn() {
    if (!lampadaQuebrada()) {
        lamp.src = './assets/img/ligada.jpg';
    }
}

function lampOff() {
    if (!lampadaQuebrada()) {
        lamp.src = './assets/img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './assets/img/quebrada.jpg';
}



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

// Quebrar

lamp.addEventListener('dblclick', lampBroken);