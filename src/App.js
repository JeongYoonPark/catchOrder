import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import Header from './component/Header.js';
import NavBar from "./component/NavBar.js";
import Menu from './pages/Menu.js';
import Table from './pages/Table.js';
import Order from './pages/Order.js';
import Auth from './pages/Auth';
import "./css/app.scss"
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "./redux/store";
import Regist from "./pages/Regist";


function App() {
  return (
      <div className="App">
          <Header />
                <div className="content">
                    <Routes>
                        <Route path="/Menu/Regist" element={<Regist />} />
                        <Route path="/Menu" element={<Menu/>}/>
                        <Route path="/Table" element={<Table/>}/>
                        <Route path="/OrderList" element={<Order/>}/>
                    </Routes>
                </div>
          <NavBar/>
      </div>
  );

}

export default App;
