
let key = '57847605709ad7f444e7fee12704626e';

  let container = document.getElementById("container");

  let iframe = document.getElementById("gmap_canvas");

  async function getWeather(){
    
    container.innerHTML = null;

    try{
    var city = document.getElementById("city").value;

    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
                          
    let data = await res.json();

    showWeather(data);
    // console.log("data:", data);
    }catch(err){
        console.log("err:", err);
    }

}

function showWeather(d){
     console.log("d:", d);

    // console.log(d.weather)
   
    let name = document.createElement("p");
    name.innerText =  d.name;

    let temp = document.createElement("p");
    temp.innerText = `Day - ${d.main.temp}°`;

    let Mintemp = document.createElement("p");
    Mintemp.innerText = `Night - ${d.main.temp_min}°`;
 
    let description = document.createElement("p");
    description.innerText = `Weather - ${d.weather[0].description}`;

    let icon = document.createElement("icon");
    icon.src = `http://openweathermap.org/img/wn/${d.weather[0].icon}.png`;


     console.log(d.weather[0].icon)
    // http://openweathermap.org/img/w/${icon}.png

    
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity - ${d.main.humidity}%` ;
    
    let pressure = document.createElement("p");
    pressure.innerText = `Pressure - ${d.main.pressure} hPa`;

    iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
   
    container.append(name, icon, temp, Mintemp,description ,humidity, pressure);
    
 }  