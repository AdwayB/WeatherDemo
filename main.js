let button = document.querySelector('.button')
let inputval = document.querySelector('.inputval')
let nameval = document.querySelector('.name')
let temp = document.querySelector('.temp')
let feelslike = document.querySelector('.feelslike')
let speed = document.querySelector('.speed')
let heading = document.querySelector('.heading')
let humidity = document.querySelector('.humidity')
let desc = document.querySelector('.desc')
let x = 0;

button.addEventListener('click', function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&units=metric&appid=90d6141cc2300589dac0a67c358ab95a`)
    .then(response => response.json())
    .then(displayData)
    .catch(error => alert('Enter a valid city name.'));
})

const displayData = (weather) => {
    if(weather.cod == '404'){
        desc.innerText = 'Enter a valid location.'
    }
    else{
        temp.innerText = `Temperature: ${weather.main.temp}°C`
        feelslike.innerText = `Feels Like: ${weather.main.feels_like}°C`
        speed.innerText = `Wind Speed: ${weather.wind.speed} m/s`
        heading.innerText = `Wind Heading: ${head_conv(weather)}`
        humidity.innerText = `Humidity: ${weather.main.humidity}%`
        desc.innerText = `Forecast: ${weather.weather[0].description}`
    }
}

function head_conv(weather){
    x = weather.wind.deg;

    if(x == 0 || x == 360){
        return 'North'
    }
    else if(x > 0 && x < 90){
        return 'North-East'
    }
    else if(x == 90){
        return 'East'
    }
    else if(x > 90 && x < 180){
        return 'South-East'
    }
    else if(x == 180){
        return 'South'
    }
    else if(x > 180 && x < 270){
        return 'South-West'
    }
    else if(x == 270){
        return 'West'
    }
    else if(x > 270 && x < 360){
        return 'North-West'
    }
    else{
        return 'OpenWeather fix your shit.'
    }
}
