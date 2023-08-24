import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";
import OffersFollow from "./Components/OffersFollow/OffersFollow";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <Navbar/>
                <OffersFollow />
                    <Routes>
                        <Route path='/profile' element={<Profile store={props.store} />}/>
                        <Route path='/dialogs' element={<DialogsContainer store={props.store} />}/>
                    </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
