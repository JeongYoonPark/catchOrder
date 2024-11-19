import Header from './component/Header.js';
import {Routes, Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu.js';
import Table from './pages/Table.js';
import List from './pages/List.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/menu" element={Menu}/>
                <Route path="/table" element={Table}/>
                <Route path="/list" element={List}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
