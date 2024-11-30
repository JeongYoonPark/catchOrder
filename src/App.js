import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Header from './component/Header.js';
import NavBar from "./component/NavBar.js";
import Menu from './pages/Menu.js';
import Cart from './pages/Cart.js';
import OrderList from './pages/OrderList.js';
import Auth from './pages/Auth';
import "./css/app.scss"
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "./redux/store";


function App() {

  const user = useSelector((state) => state.user);


    if(user.loggedIn){
      return (
          <div className="App">
              <Header />
                    <div className="content">
                        <Routes>
                            <Route path="/Menu/:id" element={<Menu/>}/>
                            <Route path="/Cart/:id" element={<Cart/>}/>
                            <Route path="/OrderList/:id" element={<OrderList/>}/>
                        </Routes>
                    </div>
              <NavBar/>
          </div>
      );
  }else{
      return(
          <div className="App">
              <Auth/>
          </div>
      );
  }

}

export default App;
