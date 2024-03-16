const root = document.querySelector(".main");
//images: 



/**
 * import sunny from './assets/weather/sunny.svg';
import rainy from './assets/weather/rainy.svg';
import nigth from './assets/weather/nigth.svg';


//icons: 

import iconHumedity from './assets/weather/humidity.png';
import iconTemperature from './assets/weather/temp.svg';
 */

const createWeatherUI = function(){
    /**<div class="weather-main">
        <div class="weather-ui">
          <img src="" alt="" class="weather-img" />
          <h4>City:</h4>
        </div>
        <div class="search-ui">
          <input type="text" id="search-inp" />
          <button id="btn-search">search</button>
        </div>
      </div> */ 

    const weatherMain = document.createElement('div'); 
    weatherMain.classList.add('weather-main'); 
    //ui weather
    const weatherUi = document.createElement('div'); 
    weatherUi.classList.add('weather-ui'); 

    const weatherImg = new Image(); 
    weatherImg.classList.add('weather-img'); 

    //temperature
    const divContentTemp = document.createElement('div'); 
    divContentTemp.classList.add('content');
    divContentTemp.classList.add('content-temp');
    const iconTemp = new Image(20, 20); 
    iconTemp.src = './assets/weather/temp.svg';
    const pTemp = document.createElement('p'); 
    pTemp.classList.add('temp-holder');

    divContentTemp.appendChild(iconTemp);
    divContentTemp.appendChild(pTemp);
    //humedad 
    const divContentHum = document.createElement('div'); 
    divContentHum.classList.add('content');
    divContentHum.classList.add('content-temp');
    
    const iconHum = new Image(20, 20); 
    iconHum.src = './assets/weather/humidity.png';

    const humudityData = document.createElement('p'); 
    humudityData.classList.add('humidity-data');

    divContentHum.appendChild(iconHum);
    divContentHum.appendChild(humudityData);

    //city name:
    const divHandleText = document.createElement('div'); 
    divHandleText.classList.add('content');
    divHandleText.classList.add('content-text');
    const nameCity = document.createElement('h4'); 
    nameCity.textContent = 'City: '; 
    const p = document.createElement('p'); 
    p.classList.add('name-holder'); 

    divHandleText.appendChild(nameCity);
    divHandleText.appendChild(p); 
    //status
    const divSatusData = document.createElement('div');
    divSatusData.classList.add('content');
    const statusData = document.createElement('p'); 
    statusData.classList.add('status-data')

    divSatusData.appendChild(statusData);
    
    

    //append sections in Weather UI 
    weatherUi.appendChild(weatherImg);
    weatherUi.appendChild(divContentTemp);
    weatherUi.appendChild(divContentHum);
    weatherUi.appendChild(divHandleText);
    weatherUi.appendChild(divSatusData);
    //ui search
    const searchUi = document.createElement('div'); 
    searchUi.classList.add('search-ui'); 

    const inpSearch = document.createElement('input'); 
    inpSearch.setAttribute('id', 'search-inp');
    const buttonSearch = document.createElement('button'); 
    buttonSearch.setAttribute('id', 'btn-search'); 
    buttonSearch.textContent = "search"

    

   
   

    searchUi.appendChild(inpSearch)
    searchUi.appendChild(buttonSearch); 

    weatherMain.appendChild(weatherUi);
    weatherMain.appendChild(searchUi);

    root.appendChild(weatherMain)


}

const handleIcons = function(dataCity){
  if(dataCity){

    const status = dataCity.current.condition.text;
    const iconWeather = document.querySelector(".weather-img"); 
    
    if(status == 'Sunny'){
      iconWeather.src = './assets/weather/sunny.svg';
    }else if(status.includes('rain') || status.includes('Thundery')){
      console.log(status)
      iconWeather.src = './assets/weather/rainy.svg';
    }else if(status == 'Clear ' && dataCity.current.is_day == false){
      iconWeather.src = './assets/weather/nigth.svg';
    }else if(status.includes('Mist')){
      iconWeather.src = './assets/weather/misty.svg';
    }else if(status == 'clear' && dataCity.current.is_day == false){
      iconWeather.src = './assets/weather/nigth.svg';
    }
  }
}

const handleData = function (data){

  const temp = document.querySelector('.temp-holder'); 
  const humidity = document.querySelector('.humidity-data');
  const name = document.querySelector('.name-holder'); 
  const status = document.querySelector('.status-data');

  if(data){
    temp.textContent = data.current.temp_c;
    
    humidity.textContent = `${data.current.humidity}%`;
    
    name.textContent = data.location.name;
    
    status.textContent = data.current.condition.text;

  }


}


function handleBackground(data){ 
  if(data){
    const status = data.current.condition.text;
    root.classList = "";
    root.classList.add('main');
    root.classList.add('mode');
    console.log(root.classList)
    if(status == 'Sunny' && data.current.is_day == true){  
        root.classList.add('ligth-mode');
    } 
    
    if(status == 'Partly Cloudy '){
      root.classList.add('party-cloudy');
    }else if(status.includes('rain') || status.includes('Thunder')){
      root.classList.add('cloudy-mode');
    }else if(data.current.is_day == false){
      root.classList.add('dark-mode')
    }
    else if(status.toLowerCase().includes('fog')|| status.toLowerCase().includes('mist')){
      root.classList.add('foggy-mode')
    }
  }
} 

export{handleBackground, createWeatherUI, handleIcons, handleData};