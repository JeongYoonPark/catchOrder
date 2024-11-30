import Skewers from "../img/image 1.png";
import Minus from "../img/minus.png";
import Trash from "../img/trash.png";
import Plus from "../img/plus.png";
import "../css/orderList.scss"
import {useSelector} from "react-redux";

function OrderList() {
    const cart = useSelector((state) => state.cart);
    const orderList = cart.map((item) => (
        <div className="menuItem">
            <div className="textArea">
                <p className="name">{item.name}</p>

                <p className="value">가격 : {item.value}원</p>
                <p className="sumValue">{item.value * item.cnt}원</p>
            </div>
            <img className="menuImg" src={Skewers} alt=""/>
        </div>
    ));
    return(
        <div className="orderList">
            <div className="listArea">
                {orderList}
            </div>
        </div>
    )
}

export default OrderList;