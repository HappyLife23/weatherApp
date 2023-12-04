//https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=abf418b44e6f58c40e6819f49d423a35&units=metric

const apiKey = 'abf418b44e6f58c40e6819f49d423a35';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');




async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s';

    if (data.weather[0].main== 'Clouds' ) {
        weatherIcon.src = './assets/cloud.png'        
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = './assets/sun.png';
    }else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = './assets/rain.png';
    }else if (data.weather[0].main== 'Snow') {
        weatherIcon.src = './assets/snow.png';
    }else if (data.weather[0].main == 'Storm') {
        weatherIcon.src = './assets/storm.png';
    }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
        
    }
        
    

    
    

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
document.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }    
});

