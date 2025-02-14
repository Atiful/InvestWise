
import {NavLink} from "react-router-dom";


function Nav(){
    return (
     
        <nav className="navbar sticky-top border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand logo"><img src="/logoImg.ico" alt="" /></a>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <NavLink aria-current="page" 
                   className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"}
                  to = "/"
                  >Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink aria-current="page" 
                   className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"}
                  to = "https://investwise-3-dashboard.onrender.com/signUp"
                  >SignUp</NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink aria-current="page" 
                   className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"}
                  to = "https://investwise-3-dashboard.onrender.com/signIn"
                  >Login</NavLink>
              </li>
            </ul>
          </div>
    
        </div>
      </nav>



    )

}


export default Nav;