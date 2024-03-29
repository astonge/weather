import './App.css'
import Header from './compoents/Header'
import TodayStat from './compoents/Todays'
import Forecast from './compoents/Forecast'
import { useEffect, useState } from "react"

function App() {
    const [location, setLocation] = useState()
    const [today, setToday] = useState({})
    const [tomorrow, setTomorrow] = useState({})
    const [nextday, setNextday] = useState({})

    const getForecastWeather = async(location) => {
      (await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHERAPI_KEY}&q=${location}&days=3&aqi=no&alerts=no`)).json()
      .then((res) => {
        console.log(res)
        setToday(res.current)
        setTomorrow(res.forecast.forecastday[1])
        setNextday(res.forecast.forecastday[2])
      })
    }

    const getAddress = async (lat, lng) => {
      (await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}&api_key=${import.meta.env.VITE_GEOCODE_API_KEY}`)).json()
      .then((res) => {
        let currentLocation = `${res.address.city}, ${res.address.state}`
        setLocation(currentLocation)
        getForecastWeather(currentLocation)
      })
    }
  
    const successCallback = (position) => {
      getAddress(position.coords.latitude, position.coords.longitude)
    }
  
    const errorCallback = (error) => {
      console.log(error)
    }
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    })

  return (
    <>
    <div className="h-auto">
      <Header 
        location={location}
      />

      <div className="bg-base-100 w-full p-4 rounded-b-xl">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          <div><Forecast day={today} title="Today"/></div>
          <div><Forecast day={tomorrow} title="Tomorrow"/></div>
          <div><Forecast day={nextday} title="Day after"/></div>
        </div>
        <div className="mt-4">
          <div><TodayStat day={today}/></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
