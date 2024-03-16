//http://api.weatherapi.com/v1/current.json?key=39cd30a19c24497382b02052241303&q=London&aqi=no 


const getCity = async (city="Azul")=>{
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=39cd30a19c24497382b02052241303&q=${city}&aqi=no`, {mode:'cors'});
    const dataCity = await response.json();

    try{
        console.log(dataCity)
        if(!dataCity.error){
            return dataCity; 
        }else{
            throw new SyntaxError("Sorry, that city seems to no exist! Try with zip-code.")
        }
    }catch(err){
        alert(` ${err.message}`);
    }
} 


export {getCity}