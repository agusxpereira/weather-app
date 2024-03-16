/* import _ from './lodash'; */
/* import './style.css';  */
import { getCity } from "./handleFetch.js";
import { handleBackground, createWeatherUI, handleIcons, handleData } from "./handleDom.js";

document.addEventListener('DOMContentLoaded', ()=>{
    createWeatherUI(); 

    async function main(name="azul"){

        const data = await getCity(name);
        handleBackground(data);
        handleIcons(data);
        handleData(data);
    } 

    main();

    const buttonSearch = document.querySelector('#btn-search'); 
    buttonSearch.addEventListener('click', ()=>{
      const valueInputName = document.querySelector('#search-inp').value; 
      console.log(valueInputName)
      if(valueInputName != null){
        const city = (valueInputName); 

        main(city);
        
      }else{
        alert("please, enter a valid name or zip code");
      }
      
    })

})
