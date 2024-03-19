function Header(props) {
    let location = props.location

    return (
      <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-3xl font-bold">Weathr</a>
              <small className="text-small">{ location }</small>
            </div>
            <div className="flex-none gap-2">
              <div className="form-control">
                  <input type="text" placeholder="Search" className="input input-bordered w-full md:w-auto" />
              </div>
              <div className="dropdown dropdown-end">
                  <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                      <img alt="Profile image" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  </div>
                  <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li><a>Settings</a></li>
                  </ul>
              </div>
            </div>
        </div>
      </>
    )
  }

  export default Header