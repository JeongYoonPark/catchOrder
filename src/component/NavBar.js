import "../css/navbar.scss"
import Food from "../img/food.png"
import Cart from "../img/shoppingCart.png"
import List from "../img/orderList.png"
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function NavBar(){
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const location = useLocation();
    const pathname = location.pathname.split("/")[1];
    useEffect(() => {
        const tag = document.getElementsByClassName("selected")[0];
        if(tag){
            tag.classList.remove("selected")
        }
        const selected = document.getElementsByClassName(pathname)[0];
        selected.classList.add("selected");
    }, [pathname]);

    return(
        <div className="navBar">
            <Link to={"/Menu/"+user.number}>
                <div>
                    <img src={Food} alt=""/>
                    <p className="Menu">메뉴</p>
                </div>
            </Link>
            <Link to={"/Cart/"+user.number}>
                <div className="cartNav">
                    <div className="cartLen">{cart.length}</div>
                    <img src={Cart} alt=""/>
                    <p className="Cart">장바구니</p>
                </div>
            </Link>
            <Link to={"/OrderList/"+user.number}>
                <div>
                    <img src={List} alt=""/>
                    <p className="OrderList">주문내역</p>
                </div>
            </Link>

        </div>
    );
}

export default NavBar;