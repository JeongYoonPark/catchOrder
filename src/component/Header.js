import "../css/header.scss";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div>
                <ul>
                    <li>
                        <Link to="/menu">메뉴</Link>
                    </li>
                    <li>
                        <Link to="/table">테이블</Link>
                    </li>
                    <li>
                        <Link to="/list">구매내역</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;