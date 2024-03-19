
import Loading from "./Loading"

function Weather(props) {
    let today = props.day.day ? props.day.day : {}
    let title = props.title ? props.title : "Loading"
    let icon = today?.condition?.icon
    let altText = today?.condition?.text
    let high = today?.maxtemp_c
    let low = today?.mintemp_c

    return (
        <>
        <div className="card bg-black shadow-xl">
            <div className="card-body">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="flex justify-center">
                        <h1 className="card-title text-2xl font-semibold">{title}</h1>
                    </div>
                    <div className="flex justify-center">
                        {icon && altText ? 
                            <img alt={altText} src={icon} width="64"/> : 
                            <Loading/>
                        }
                    </div>
                    <div className="flex justify-center">
                        {high && low ?
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