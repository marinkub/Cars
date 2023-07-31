import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import ModelsPage from '../pages/ModelsPage';
import MakesPage from '../pages/MakesPage';
import store from '../stores/store';
import { useState } from 'react';


function Navigation() {
    const [Classname, setClassname] = useState("Visible");

    const toggleMenu = () => {
        if(Classname === "Visible")
        {
            setClassname("Hidden"); 
        }
        else
        {
            setClassname("Visible");
        }
    }
    return(
        <><button className='sideMenu' onClick={toggleMenu}>Menu</button>
            <Router>
            <div id='fade-in' className={Classname}>  
            <NavLink reloadDocument to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><button className='menuButton'>Home</button></NavLink>
            <NavLink reloadDocument to="/vehicleMakes" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><button className='menuButton'>Vehicle Makes</button></NavLink>
            <NavLink reloadDocument to="/vehicleModels" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><button className='menuButton'>Vehicle Models</button></NavLink>
            {/*<a href='/vehicleMakes'><button className='menuButton'>Vehicle Makes</button></a>
            <a href='/vehicleModels'><button className='menuButton'>Vehicle Models</button></a>*/}
           </div>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/vehicleMakes' element={<MakesPage store={store} />}></Route>
                <Route exact path='/vehicleModels' element={<ModelsPage store={store} />}></Route>
            </Routes>
        </Router>
       </>
    )
}

export default Navigation