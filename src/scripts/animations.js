const input = document.querySelector('#city-input');
const btn = document.querySelector('#button');
const placehold = document.querySelector('.placehold');
const line = document.querySelector('.magic-line');

input.disabled = true;
btn.disabled = true;


input.addEventListener('keyup', () => {
    if (input.value !== '') {
        btn.style.opacity = '0.5';
        btn.style.height = '70px';
        btn.disabled = false;
    }
    else {
        btn.style.opacity = '0';
        btn.style.height = '0px';
        btn.disabled = true;
    }
});

btn.addEventListener('mouseover', (eventas) => {
    if (eventas.type === 'mouseover' && input.value !== '') {
        btn.style.opacity = '1';
        btn.disabled = false;
    }
    else {
        btn.style.opacity = '0';
        btn.disabled = true;
    }
});

btn.addEventListener('mouseout', (eventas) => {
    if (eventas.type === 'mouseout' && input.value !== '') {
        btn.style.opacity = '0.5';
        btn.disabled = false;
    }
    else {
        btn.style.opacity = '0';
        btn.disabled = true;
    }
});

placehold.addEventListener('click', eventas => {
    line.style.top = "-75px";
    line.style.opacity = "0";
    input.style.display = 'inline-block';
    input.style.height = '70px';
    input.style.outline =  'none';
    input.style.backgroundColor = "white";
    setTimeout(() => input.focus(), 800)
    setTimeout(() => input.setAttribute('placeholder', 'Enter a city name'), 800);
    placehold.style.opacity = '0';
    input.disabled = false;

});
