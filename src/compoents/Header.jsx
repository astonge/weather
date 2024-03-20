import Loading from './Loading'

function Header(props) {
    let location = props.location

    return (
      <>
        <div className="navbar bg-base-100 rounded-t-xl">
            <div className="flex-1">
              <a className="btn btn-ghost text-3xl font-bold">Weathr</a>
              {location ?
                <small className="text-lg pt-2">{ location }</small> :
                <Loading/>
              }
            </div>
        </div>
      </>
    )
  }

  export default Header