import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import ModelsPage from '../pages/ModelsPage';
import MakesPage from '../pages/MakesPage';
import store from '../stores/store';

function Test() {
    return(
        <>
       
        <div className="header"></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <Router>
        <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
            <li><NavLink reloadDocument to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
            <li><NavLink reloadDocument to="/vehicleMakes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Vehicle Makes</NavLink></li>
            <li><NavLink reloadDocument to="/vehicleModels" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Vehicle Models</NavLink></li>
            </ul>
        </div>
        <div id='center' className="main center">
            <div >
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/vehicleMakes' element={<MakesPage store={store} />}></Route>
                    <Route exact path='/vehicleModels' element={<ModelsPage store={store} />}></Route>
                </Routes>
            </div>
        </div>
        </Router>
        </>
       
       
    )
}

export default Test;