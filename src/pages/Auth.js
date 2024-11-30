import "../css/auth.scss"

function Auth() {
    return (
        <div className="auth">
            <h1>테이블 등록하기</h1>
            <div className="formArea">
                <div>
                    이름
                    <br/>
                    <span>
                        <input type="text"/>
                    </span>
                </div>
                <div className="phone">
                    전화번호
                    <br/>
                    <span>
                        <input type="number"/>
                        -
                        <input type="number"/>
                        -
                        <input type="number"/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Auth;