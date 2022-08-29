import react from "react";
import { ReactDOM } from "react";
import "./Menu.css"
import "font-awesome/css/font-awesome.min.css"
const Menu = props => {
    return (
            <div className="overlay">
                <div onClick={props.onMenuCloseClick} className="space"><span>Close menu  <i className="fa fa-close"></i></span></div>
                <div className="space"><span>Categories</span></div>
                <div className="space"><span>Makeup</span></div>
            </div>
        )
}
export default Menu;

// menu.css
body {
    font-family: sans-serif;
  }
  
.Menu {
    position: relative;
    text-align: center;
}
  
*{
    box-sizing: border-box;
}
  
.overlay {
    position: fixed;
    display: block;
    margin-top: 80px;
    height: 100%;
    padding: 15px 30px 0 30px;
    top: 0;
    right: 0;
    color: black;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 100;
    font-size: 26px;
}

.space{
    margin-bottom: 10px;
}
