const key = 'a2695dd855add3eb2ad17085d5ebccbb';

function submit (city) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`
    return fetch(url)
        .then(resp => resp.json())

}

export { submit }
