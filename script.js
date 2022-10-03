
const url =  'https://api.openweathermap.org/data/2.5/'
const key =  '447f66f7558161f3173a26e40b5fc3e4'

const setQuery = (e)  => {
    if(e.keyCode == '13' )
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang==tr`
    fetch(query)
    .then(weather => {
        return weather.json()

    })
    .then (displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector(`.temp`)
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmaax = document.querySelector('.minmax')
    minmaax.innerText = `${Math/round(result.main.temp_min)}°C/
    ${Math/round(result.main.temp_max)}`

   
}
const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)  