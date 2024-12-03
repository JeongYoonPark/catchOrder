import Skewers from "../img/image 1.png";
import Minus from "../img/minus.png";
import Trash from "../img/trash.png";
import Plus from "../img/plus.png";
import "../css/orderList.scss"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import XIcon from "../img/xIcon.png";

function Order() {
    const cart = useSelector((state) => state.cart);
    const [tableList, setTableList] = useState([]);
    const [tableId, setTableId] = useState(0);
    const dispatch = useDispatch();
    const hide = (e) => {
        const background = document.querySelector("#popupBG");
        const closeBtn = document.querySelector(".xIcon");
        const contain = document.querySelector(".contain");
        if(e.target === background || e.target === closeBtn || e.target===contain){
            const bg = document.getElementById("popupBG");
            bg.classList.add("hide");
        }
    }
    const unhide = (e) => {
        setTableId(e.target.children[0].innerHTML);

        axios.get('http://localhost:4000/api/order/orders',
            {params:{tableId:tableId}},
            { withCredentials: true },)
            .then((res) => {
            if(res.data.isSuccess){
                console.log(res);
            }
        }).catch(err => console.log(err));
        const bg = document.getElementById("popupBG");
        bg.classList.remove("hide");
    }

    useEffect(() => {
        axios({
            method: "get",
            url:"http://localhost:4000/api/table/getTable",
            data:[],
            responseType: "json",
        }).then((res) => {
            if(res.data.isSuccess){
                setTableList(res.data.result);
            }
        }).catch(err => console.log(err));
    },[]);
    const tables = tableList && tableList.map((item) => {

        return(
            <div className={"table " + item.color} onClick={unhide}>
                {item.status}
                <div className="tableId">{item.tableId}</div>
            </div>
        )
    });
    return (

        <div className="orderList">
            <div id="popupBG" className="hide" onClick={hide}>
                <div className="popup">
                    <input type="hidden" id="tableId" value={tableId}/>
                    <img className="xIcon" src={XIcon} alt="" onClick={hide}/>
                    <span>{tableId}번 테이블</span>

                </div>
            </div>
            <div className="menuArea">
                {tables}
            </div>

        </div>
    )
}

export default Order;