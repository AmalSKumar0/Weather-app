const apiKEY="60c9c124fe06aa3d814dfb8c2547adb3";
const apiURL="https://api.openweathermap.org/data/2.5/weather?";
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const WindSpeed=document.querySelector(".WindSpeed");
const HumData=document.querySelector(".HumData");
const Image_=document.querySelector(".image");
const input=document.querySelector("input");

async function chechWeather(loaction){
    const response =  await fetch(apiURL + `&appid=${apiKEY}` + `&q=${loaction}`);
    var data = await response.json();
    if(!data.name){
        alert("Invalid Location");
        return;
    }
    city.innerHTML=data.name;
    temp.innerHTML=(data.main.temp - 273.15).toFixed(0) + "°C";
    HumData.innerHTML=data.main.humidity + "%";
    WindSpeed.innerHTML=data.wind.speed + "km/hr";


    if(data.weather[0].main == "Clouds"){
        Image_.src = "clouds.png";
    }
    else  if(data.weather[0].main == "Clear"){
        Image_.src = "clear.png";
    }
    else  if(data.weather[0].main == "Rain"){
        Image_.src = "rain.png";
    }
    else  if(data.weather[0].main == "Drizzle"){
        Image_.src = "drizzle.png";
    }
    else  if(data.weather[0].main == "Mist"){
        Image_.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

function Search(){
    chechWeather(input.value);
    input.value="";
};
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Search();
    }
});

