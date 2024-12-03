import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {menuActions} from "../redux/store";
import {useEffect, useReducer, useRef, useState} from "react";
import UploadImage from "../img/UploadImage.png";
import "../css/menu.scss"
import axios from "axios";


function Regist() {
    const navigate = useNavigate();
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const menuRegist = async(e) =>{



        const conf = window.confirm("메뉴를 등록하시겠습니까?");
        if(conf){
            const formData = new FormData();
            const e = document.getElementsByTagName("form")[0];
            formData.append("menuImage", e.children[10].files[0]);
            formData.append("menuName",e.children[2].value);
            formData.append("menuPrice", e.children[6].value);
            console.log(formData);
            axios({
                method: "post",
                url: "http://localhost:4000/api/menu/regist",
                data: formData,
                responseType: "json",
            }).then((res) => {
                if(res.data.isSuccess){
                    window.alert("메뉴가 등록되었습니다.");
                    navigate("/Menu");
                }

            }).catch(err => console.log(err));
        }
    }
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };
    const filechange = () => {
        document.getElementById("fileInput").click();
    }

    return (
        <div className="menu">
            <div className="menuList">
                <div className="menuRegist">
                    <form encType='multipart/form-data'>
                        <span>메뉴 이름</span>
                        <br/>
                        <input name="name" type="text"/>
                        <br/>
                        <span>가격</span>
                        <br/>
                        <input name="price" type="number"/>
                        <br/>
                        <span>메뉴 사진</span>
                        <br/>
                        <input type="file" id="fileInput" name="file" accept="image/*" className="imginput" onChange={saveImgFile}
                               ref={imgRef}/>
                        <img src={imgFile ? imgFile : UploadImage} className="preview" onClick={filechange}/>
                        <div className="menuregistBtn" onClick={menuRegist}>
                            메뉴 등록 하기
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Regist;