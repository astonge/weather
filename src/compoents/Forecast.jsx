
import Loading from "./Loading"

function Weather(props) {
    let today = props.day.day ? props.day.day : {}
    let title = props.title
    
    let icon = props.day?.condition?.icon
    let altText = props.day?.condition?.text

    let forecastIcon = today?.condition?.icon
    let forecastAltText = today?.condition?.text

    let temp = props.day?.temp_c
    let high = today?.maxtemp_c
    let low = today?.mintemp_c
    return (
        <>
        <div className="card bg-black shadow-xl">
            <div className="card-body px-10 pt-10">
                <div className="flex-1 w-full">
                    <div className="flex justify-center">
                        <h1 className="card-title text-2xl font-semibold">{title}</h1>
                    </div>
                    <div className="flex justify-center">
                        {icon && altText ? 
                            <img alt={altText} src={icon} width="64"/> : 
                            forecastIcon && forecastAltText ?
                                <img alt={forecastAltText} src={forecastIcon} width="64"/> :
                                <Loading/>
                        }
                    </div>
                    <div className="flex justify-center">
                        {temp ?
                            <h1 className="text-1xl font-semibold">{temp} {'\u00b0'}C</h1> :
                                high && low ?
                                <h1 className="text-1xl font-semibold">{high} {'\u00b0'}C / {low} {'\u00b0'}C</h1> :
                                <Loading/>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Weather