let toastBox = document.getElementById("toastBox");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const city = document.getElementById("city");
const wind = document.getElementById("wind");
const apiKey = "52bd6800cf4cfcafb67e18837d6925d0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(){ 
    const inputBox = document.getElementById("cityName").value;
    const response = await fetch(apiUrl + inputBox + `&appid=${apiKey}`);
    if(response.status === 404 || inputBox ==''){
        showToast();
    }else{
        var data = await response.json();
        city.innerHTML = data.name;
        wind.innerHTML = "Wind speed is " + data.wind.speed + " km/h"
        temperature.innerHTML = "Temperature is " + data.main.temp +" ºC";
        humidity.innerHTML = "Humidity is " + data.main.humidity + "%";
    }
}

function showToast(){
        let toast = document.createElement("div");
        toast.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Please enter a valid value';
        toast.classList.add('toast');
        toastBox.appendChild(toast);

    setTimeout(()=>{
        toastBox.removeChild(toast);
    },3000)
}