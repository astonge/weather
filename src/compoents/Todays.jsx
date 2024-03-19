
import Loading from "./Loading"

function Todays(props) {
    let icon = props.day?.condition?.icon
    let altText = props.day?.condition?.text
    let temp = props.day?.temp_c

    return (
        <>
        <div className="card bg-black shadow-xl">
            <div className="card-body">
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="flex justify-center">
                        <h1 className="card-title text-5xl font-semibold">Today</h1>
                    </div>
                    <div className="flex justify-center">
                        {icon && altText ?
                            <img alt={altText} src={icon} width="64"/> :
                            <Loading/>
                        }
                    </div>
                    <div className="flex justify-center">
                        {temp ?
                            <h1 className="text-4xl font-semibold">{temp} {'\u00b0'}C</h1> :
                            <Loading/>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todays