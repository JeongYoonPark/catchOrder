import {useDispatch, useSelector} from "react-redux";
import "../css/table.scss";
import XIcon from "../img/xIcon.png"
import {useEffect, useState} from "react";
import axios from "axios";


function Table() {
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
        const bg = document.getElementById("popupBG");
        bg.classList.remove("hide");

    }
    async function statusChange(e) {

        const data = {
            tableId: tableId,
            status: e.target.innerHTML
        }
        console.log(data);
        axios({
            method: "put",
            url: "http://localhost:4000/api/table/status",
            data: data, responseType: "json",
        }).then((res) => {
            if (res.data.isSuccess) {
                window.location.reload();
            }
        }).catch(err => console.log(err));
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

            <div className="cart">
                <div id="popupBG" className="hide" onClick={hide}>
                    <div className="popup">
                        <input type="hidden" id="tableId" value={tableId}/>
                        <img className="xIcon" src={XIcon} alt="" onClick={hide}/>
                        <br/>
                        <span>{tableId}번 테이블</span>
                        <div className="btnArea">
                            <div className="btn" onClick={statusChange}>마감</div>
                            <div className="btn" onClick={statusChange}>예약</div>
                            <div className="btn" onClick={statusChange}>사용가능</div>
                        </div>
                    </div>
                </div>
                <div className="menuArea">
                    {tables}
                </div>

            </div>
        )
}

export default Table;