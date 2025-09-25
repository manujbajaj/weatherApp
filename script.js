let cityName="";

let url=`https://api.openweathermap.org/data/2.5/weather?appid=81ddefea89aeca9a9b0ba3c5f2ef515b&units=metric&q=`;
let cpy=`https://api.openweathermap.org/data/2.5/weather?appid=81ddefea89aeca9a9b0ba3c5f2ef515b&units=metric&q=`;


let search=document.querySelector(".valueInput");
let searchButton=document.querySelector(".searchButton");

let weatherIMG=document.querySelector("#sun");
let degrees=document.querySelector(".degree");
let city=document.querySelector(".city");
let humidity=document.querySelector(".humidityP");
let wSpeed=document.querySelector(".windS");

async function solve (){
    try{
        url=cpy;
        cityName=search.value;
        url=url+cityName;
        let response =await fetch(url)
        
        if(!response.ok){
            throw new Error("error in fetching");
        }

        let data=await response.json();
        let tempi=Math.floor(data.main.temp);
        degrees.textContent=`${tempi}°c`;
        city.textContent=data.name;
        let humi=data.main.humidity;
        humidity.textContent=`${humi}%`;
        let spd=data.wind.speed;
        wSpeed.textContent=`${spd}km/h`;

        response="";
        console.log(cityName);
        
        if(data.weather[0].main=="Clouds"){
            weatherIMG.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIMG.src="images/rain.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIMG.src="images/snow.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIMG.src="images/drizzle.png"
        }
        

        console.log(data);
        
    }
    catch(error){
        
        degrees.textContent=`--`;
        city.textContent="Error";
        humidity.textContent=`--`;
        wSpeed.textContent=`--`;
        console.log(error);
        
    }   
    search.value="";
    
    

}

searchButton.addEventListener("click",solve);

search.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        solve();
    }
})