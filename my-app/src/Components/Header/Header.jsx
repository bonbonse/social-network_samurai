import s from './Header.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";

const Header = (props) => {
    let me = props.isAuth ? <img src="#"/> :
        <Routes><Route path='/login' element={<Login />}/></Routes>

    return (
        <header className='header'>
            <div className={s.headerWrapper}>
                <div className={s.item}>иконка и название</div>
                <div className={s.navigations}>навигация с выпадающими списками/оповещение</div>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>);
}

export default Header;