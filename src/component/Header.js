import "../css/header.scss"
import {useSelector} from "react-redux";
import Logo from "../img/Logo.png"

function Header(){
    const user = useSelector((state) => state.user);
    return (
        <div className="header">
            <img src={Logo}/>
            Table No.{user.number}
        </div>
    )
}

export default Header;