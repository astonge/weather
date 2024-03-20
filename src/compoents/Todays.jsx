
import Loading from "./Loading"

function Todays(props) {
    let icon = props.day?.condition?.icon
    let altText = props.day?.condition?.text
    let temp = props.day?.temp_c

    let humidity = props.day?.humidity
    let feelslike_c = props.day?.feelslike_c
    let wind_dir = props.day?.wind_dir
    let wind_kph = props.day?.wind_kph
    let gust_kph = props.day?.gust_kph
    
    let uv_index = props.day?.uv
    let vis_km = props.day?.vis_km

    return (
        <>
        <div className="card bg-black shadow-xl">
            <div className="card-body p-0">
                <div className="grid">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Feels Like</div>
                        {feelslike_c ? <div className="stat-value">{feelslike_c} {'\u00b0'}C</div> : <Loading/>}
                    </div>
                    <div className="stat">
                        <div className="stat-title">Humidity</div>
                        {humidity? <div className="stat-value">{humidity} {'\u0025'}</div> : <Loading/>}
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Wind</div>
                        {wind_dir ? <div className="stat-value">{wind_dir} </div> : <Loading/>}
                        {wind_kph ? <div className="stat-desc">{wind_kph} kph</div> : <Loading/>}
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Wind Gusts</div>
                        {gust_kph ? <div className="stat-value">{gust_kph} kph</div> : <Loading/>}
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">Visibility</div>
                        {vis_km ? <div className="stat-value">{vis_km} km</div> : <Loading/>}
                    </div>
                    
                    <div className="stat">
                        <div className="stat-title">UV Index</div>
                        {uv_index ? <div className="stat-value">{uv_index}</div> : <Loading/>}
                    </div>        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todays