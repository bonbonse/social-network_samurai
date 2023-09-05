import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import {Route, Routes} from "react-router-dom";
import OffersFollow from "./Components/OffersFollow/OffersFollow";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = () => {
    return (
            <div className='app'>
                <Header/>
                <Navbar/>
                <OffersFollow />
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer  />}/>
                    </Routes>
            </div>
    );
}

export default App;
