const API_KEY = `bce928b867d756499ba10802ef9d2306`

const getWeatherData = () => {
    const city = document.getElementById('city_name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature (data));

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = tempareturesDetails => {
    setInnerText ('city',tempareturesDetails.name)
    setInnerText ('tempareture',tempareturesDetails.main.temp)
    setInnerText ('condition',tempareturesDetails.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${tempareturesDetails.weather[0].icon}@2x.png`
    const icon = document.getElementById('weather-icon')
    icon.setAttribute('src', url)
}