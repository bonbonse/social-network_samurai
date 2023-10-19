import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from "react-router-dom";
import OffersFollow from "./Components/OffersFollow/OffersFollow";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = () => {
    return (
            <div className='app'>
                <HeaderContainer />
                <Navbar/>
                <OffersFollow />
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer  />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
            </div>
    );
}

export default App;
