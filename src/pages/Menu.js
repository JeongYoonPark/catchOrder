import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {menuActions} from "../redux/store";
import {useEffect, useReducer, useState} from "react";
import Skewers from "../img/image 1.png"
import XIcon from "../img/xIcon.png"
import Trash from "../img/trash.png"
import Plus from "../img/plus.png";
import Contain from "../img/contain.png";
import Minus from "../img/minus.png";
import Uncheck from "../img/UnCheck.png";
import Check from "../img/Check.png";
import "../css/menu.scss"
import axios from "axios";

function Menu() {
    const menu = useSelector((state) => state);
    const dispatch = useDispatch();
    const params = useParams();
    const [menuList, setList] = useState([])
    const [reload, setReload] = useState(true);
    const switching = (e) =>{
        const checkbox = e.target.parentElement.children[0];

        let num = menuList.findIndex((obj) =>{
            return obj.menuId == checkbox.value;
        });

        menuList[num].checked = !menuList[num].checked;
        checkbox.checked = menuList[num].checked;
        const chk = e.target.parentElement.getElementsByClassName("checkBox");

        for(const item of chk){
            item.classList.remove("hidden");
        }
        e.target.classList.add("hidden")

    }

    const soldOut = (e) =>{
        const checked = document.getElementsByClassName("menuId");
        const box = {menuId:[]};

        for(const item of checked){
            if(item.checked){
                box.menuId.push(Number(item.value))
            }
        }
        const conf = window.confirm("선택한 메뉴를 매진처리하시겠습니까?");
        if(conf){
            axios({
                method: "put",
                url: "http://localhost:4000/api/menu/statusChange",
                data: box,
                responseType: "json",
            }).then((res) => {
                if(res.data.isSuccess){
                    window.location.reload();
                }
            }).catch(err => console.log(err));
        }
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:4000/api/menu/getMenu",
            responseType: "json",
        }).then((res) => {
            setList(res.data.result);
            dispatch(menuActions.setList(res.data.result))
        }).catch(err => console.log(err));
    },[reload]);
    const menus = menuList && menuList.map((item) => {
        return (
            <div className="menuItem" key={item.menuId}>
                <input type="checkbox" className="menuId" name="menuId" value={item.menuId}
                       defaultChecked={item.checked}/>
                <img src={Check} className="checkBox hidden" onClick={switching}/>
                <img src={Uncheck} className="checkBox" onClick={switching}/>
                <span className={item.status == "매진" ? "status red" : "status green"}>{item.status}</span>
                <div>
                    <span className="name">{item.menuName}</span>
                    <br/>
                    <span className="price">{item.menuPrice}원</span>
                </div>
                <img src={item.imgUrl}/>
            </div>
        )
    })


    return (
        <div className="menu">
            <Link to="/Menu/Regist">
                <div className="btn registBtn">메뉴등록</div>
            </Link>
            <div className="menuList">
                {menus}

            </div>
            <div className="btn soldOutBtn" onClick={soldOut}>
                매진처리
            </div>
        </div>
                    )
                }

export default Menu;