import "../css/navbar.scss"
import Food from "../img/food.png"
import Table from "../img/table.png"
import List from "../img/orderList.png"
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function NavBar(){

    const location = useLocation();
    const pathname = location.pathname.split("/")[1];
    useEffect(() => {
        const tag = document.getElementsByClassName("selected")[0];
        if(tag){
            tag.classList.remove("selected")
        }
        const selected = document.getElementsByClassName(pathname)[0];
        if(selected){
            selected.classList.add("selected");
        }
    }, [pathname]);

    return(
        <div className="navBar">
            <Link to="/Menu">
                <div>
                    <img src={Food} alt=""/>
                    <p className="Menu">메뉴</p>
                </div>
            </Link>
            <Link to="/Table">
                <div className="cartNav">
                    <img src={Table} alt=""/>
                    <p className="Cart">테이블 관리</p>
                </div>
            </Link>
            <Link to="/OrderList">
                <div>
                    <img src={List} alt=""/>
                    <p className="OrderList">주문관리</p>
                </div>
            </Link>

        </div>
    );
}

export default NavBar;