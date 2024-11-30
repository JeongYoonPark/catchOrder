import {useDispatch, useSelector} from "react-redux";
import Skewers from "../img/image 1.png"
import Trash from "../img/trash.png"
import Plus from "../img/plus.png";
import Minus from "../img/minus.png";
import "../css/cart.scss";
import {cartActions} from "../redux/store";


function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const increase = (e) => {
        const pkey = e.target.parentElement.children[0].value;
            dispatch(cartActions.increase({id:pkey}));

    }
    const decrease = (e) => {
        const pkey = e.target.parentElement.children[0].value;
        dispatch(cartActions.decrease({id:pkey}));
    }
    const remove = (e) => {
        const pkey = e.target.parentElement.children[0].value;
        dispatch(cartActions.remove({id:pkey}));
    }
    const menuList = cart.map((item) => (
        <div className="menuItem">
            <div className="textArea">
                <p className="name">{item.name}</p>

                <p className="value">가격 : {item.value}원</p>
                <p className="sumValue">{item.value * item.cnt}원</p>
            </div>
            <img className="menuImg" src={Skewers} alt=""/>
            <div className="countBox">
                <input type="hidden" value={item.id}/>
                <img src={(item.cnt > 1) ? Minus : Trash} onClick={(item.cnt > 1) ? decrease : remove}/>
                <span id="cnt">{item.cnt}</span>
                <img src={Plus} onClick={increase}/>
            </div>
        </div>
    ));
    const totalPrice = () => {
        let total = cart.map((item) => {
            total += item.cnt * item.value;
        })
        return total;
        console.log(total);
    };
    return (

        <div className="cart">
            <div className="menuArea">
                {menuList}
            </div>
            <span className="checkPrice">결제금액을 확인해주세요.</span>
            <div className="receipt">
                <span>결제예정금액</span>
                <span>{cart.reduce((acc, price) => acc + Number(price.value) * price.cnt,0)}원</span>
            </div>
            <div className="orderBtn">
                {cart.reduce((acc, price) => acc + Number(price.value) * price.cnt,0)}원 주문하기
            </div>
        </div>
    )
}

export default Cart;