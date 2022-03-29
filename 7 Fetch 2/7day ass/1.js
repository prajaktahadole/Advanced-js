
let key = '57847605709ad7f444e7fee12704626e';

let container = document.getElementById("container");

// let iframe = document.getElementById("gmap_canvas");

async function getWeather(){

  container.innerHTML = null;

  try{
  var city = document.getElementById("city").value;

  var res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`);

  let data = await res.json();

  showWeather(data);
  // console.log("data:", data);
  }catch(err){
      console.log("err:", err);
  }

}

function showWeather(d){
  console.log("d:", d);

  for(var i = 0; i < 7; i++){

    var div = document.createElement("div");

    let dt_txt = document.createElement("p");
    dt_txt.textContent =  d.list[i].dt_txt;
    // console.log(d.list[i].dt_txt[0])
  
    let icon = document.createElement("img");
    icon.src = `http://openweathermap.org/img/wn/${d.list[i].weather[0].icon}.png`;

  
    
  
    let temp = document.createElement("p");
    temp.innerText = `${d.list[i].main.temp}°`;
  
    let Mintemp = document.createElement("p");
    Mintemp.innerText = `${d.list[i].main.temp_min}°`;
  
    
    div.append(dt_txt, icon,temp, Mintemp)
    container.append(div);
    
  }


}  

