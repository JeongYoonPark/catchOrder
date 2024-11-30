import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {userActions, cartActions} from "../redux/store";
import {useEffect, useState} from "react";
import Skewers from "../img/image 1.png"
import XIcon from "../img/xIcon.png"
import Trash from "../img/trash.png"
import Plus from "../img/plus.png";
import Contain from "../img/contain.png";
import Minus from "../img/minus.png";
import "../css/menu.scss"

function Menu() {
    const [cnt, setCnt] = useState(1);
    const [pkey, setPKey] = useState(0);
    const [menuName, setName] = useState("");
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const params = useParams();
    const tableIn = () => {
        dispatch(userActions.login({number:params.id}));
    }
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
        const item = document.querySelector(".menuItem");


        if(e.target.classList[0] === 'menuItem'){
            setPKey(e.target.children[0].value);
            setName(e.target.children[1].children[0].innerHTML);
            setValue(e.target.children[1].children[2].innerHTML);
            setCnt(1);
            const bg = document.getElementById("popupBG");
            bg.classList.remove("hide");
        }
    }
    const cntChange = (action) => {
        if(action === "INCREASE"){
            setCnt(cnt+1);
        }else{
            if(cnt>1){
                setCnt(cnt-1);
            }
        }
    }
    const contain = (e) => {
        const pkey = document.getElementById("menuPKey").value;
        const name = document.getElementById("menuName").innerHTML;

        dispatch(cartActions.add({id:pkey, name:name, cnt:cnt, value: value}));
        hide(document.querySelector(".xIcon"));
    }
    useEffect(() => {
        tableIn();
    },[]);

    return (
        <div className="menu">
            <div id="popupBG" className="hide" onClick={hide}>
                <div className="popup">
                    <input type="hidden" id="menuPKey" value={pkey}/>
                    <img className="xIcon" src={XIcon} alt="" onClick={hide}/>
                    <br/>
                    <div className="menuArea">
                        <img src={Skewers} alt=""/>
                        <div className="textArea">
                            <span className="row" id="menuName">{menuName}</span>
                            <span className="row">
                                <span className="line">가격</span>
                                {value}원
                            </span>
                            <span className="row">
                                <span className="line">수량</span>
                                <div className="countBox">
                                    <img src={(cnt>1) ? Minus : Trash} onClick={() => cntChange("DECREASE")}/>
                                    <span id="cnt">{cnt}</span>
                                    <img src={Plus} onClick={() => cntChange("INCREASE")}/>
                                </div>
                            </span>
                        </div>
                    </div>
                    <img className="contain" src={Contain} onClick={contain}/>
                </div>
            </div>
            <div className="menuList">
                <div className="menuItem" onClick={unhide}>
                    <input type="hidden" className="menuId" value="1"/>
                    <div>
                        <span className="name">파닭꼬치</span>
                        <br/>
                        <span className="price">2000</span>원
                    </div>
                    <img src={Skewers}/>
                </div>
                <div className="menuItem" onClick={unhide}>
                    <input type="hidden" className="menuId" value="2"/>
                    <div>
                        <span className="name">해장라면</span>
                        <br/>
                        <span className="price">8000</span>원
                    </div>
                    <img src={Skewers}/>
                </div>
                <div className="menuItem" onClick={unhide}>
                    <input type="hidden" className="menuId" value="3"/>
                    <div>
                        <span className="name">라면</span>
                        <br/>
                        <span className="price">6000</span>원
                    </div>
                    <img src={Skewers}/>
                </div>
                <div className="menuItem" onClick={unhide}>
                    <input type="hidden" className="menuId" value="4"/>
                    <div>
                        <span className="name">석쇠불고기</span>
                        <br/>
                        <span className="price">12000</span>원
                    </div>
                    <img src={Skewers}/>
                </div>

            </div>
        </div>
    )
}

export default Menu;