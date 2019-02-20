import '/scripts/animations.js';
import { submit } from '/scripts/url.js';

const input = document.querySelector('#city-input');
const output = document.querySelector('.output');
const forma = document.querySelector('form');
let array = [];
let counter = 0;
let cities = [];

//draw the block
function drawBlock (arejus) {

    arejus.forEach( (obj) => {
        const divNode = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const header = document.createElement('h2');
        const img = document.createElement('img');
        const tempNode = document.createElement('p');
        const descriptionNode = document.createElement('p');
        const humidityNode = document.createElement('p');
        const dateNode = document.createElement('p');

        divNode.setAttribute('class', 'box');
        deleteBtn.setAttribute('class', 'linediv');
        img.setAttribute('id', 'mini-icons');

        header.innerHTML = `${obj.name}`;
        deleteBtn.innerHTML = `<div class="line1"></div><div class="line2"></div>`;

        img.setAttribute('src', `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`);

        tempNode.innerHTML = `<b>Temperature</b>: ${obj.main.temp} <sup>o</sup>C`;

        descriptionNode.innerHTML = `<b>Description</b>: ${obj.weather[0].description}`;

        humidityNode.innerHTML = `<b>Humidity</b>: ${obj.main.humidity} %`;
        dateNode.innerHTML = `<b>Time</b>: ${Date()}`;

        divNode.appendChild(img);
        divNode.appendChild(deleteBtn);
        divNode.appendChild(header);
        divNode.appendChild(tempNode);
        divNode.appendChild(descriptionNode);
        divNode.appendChild(humidityNode);
        divNode.appendChild(dateNode);

        output.appendChild(divNode);

        deleteBtn.addEventListener('click', () => {
            divNode.remove();

            cities = cities.filter(item => item !== obj.name.toLowerCase())
            array = array.filter(item => item.name !== obj.name);
        })
    });

}

//sort
function sort (arr, evn) {
    var r;
    for (var i = 0; i <= arr.length; i++) {
        if (counter === 0) {
            r = true;
            break;
        }

        else if (evn.target.elements.betkas.value.toLowerCase().trim() !== cities[i]) {
            r = true;
        }

        else {
            r = false;
            break;
        }
    }
    counter++;
    return r;
}

//fetch
forma.addEventListener('submit', (eventas) => {
    eventas.preventDefault();

    if (sort(array, eventas) === true) {

        submit(eventas.target.elements.betkas.value.trim())
            .then(result => {

                if (result.cod === "400" || result.cod === "404") {
                    throw new Error("kitas erroras")
                }
                output.innerHTML = '';
                array.push(result);
                drawBlock(array);
                cities.push(result.name.toLowerCase())
            })
            .catch(err => alert('Please enter an actual city'));
    }

    else {
        alert('You have already wrote this City. Check below.')
    }
    eventas.target.elements.betkas.value = "";
});
