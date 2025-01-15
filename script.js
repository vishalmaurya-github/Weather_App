const inputBox= document.querySelector('.input-box')
const searchBtn= document.getElementById('searchBtn')
const weather_img= document.querySelector('.weather-img')
const temp= document.querySelector('.temperature')
const desc= document.querySelector('.description')
const humidity= document.getElementById('humidity')
const wind= document.getElementById('wind-speed')
const error= document.querySelector('.location-not-found')
const weather_body= document.querySelector('.weather-body')

async function checkWeather(city){
    const api_key= ""
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weatherData= await fetch(`${url}`).then(response=> response.json())

    if(weatherData.cod==='404'){
        error.style.display="flex";
        weather_body.style.display="none"
        console.log("error");
        return
    }
    error.style.display="none"
    weather_body.style.display="flex"
    // console.log(weatherData);
    temp.innerHTML= `${Math.round(weatherData.main.temp-273.15)}°C`
    desc.innerHTML=`${weatherData.weather[0].description}`
    humidity.innerHTML=`${weatherData.main.humidity}%`
    wind.innerHTML=`${weatherData.wind.speed}km/h`
    
    switch (weatherData.weather[0].main) {
        case 'Clouds':
                weather_img.src="/assets/cloud.png"
                break;
        case 'Clear':
                weather_img.src="/assets/clear.png"
                break;
        case 'Mist':
                weather_img.src="/assets/mist.png"
                break;
        case 'Rain':
                weather_img.src="/assets/rain.png"
                break;
        case 'Snow':
                weather_img.src="/assets/snow.png"
                break;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
})