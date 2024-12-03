import "../css/header.scss"
import {useSelector} from "react-redux";
import Logo from "../img/Logo.png"

function Header(){
    return (
        <div className="header">
            <img src={Logo}/>
        </div>
    )
}

export default Header;