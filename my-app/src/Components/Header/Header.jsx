import s from './Header.module.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";

const Header = (props) => {
    let me = props.isAuth ? <button onClick={props.logout}>logout</button> :
        <NavLink to='/login'>Login</NavLink>

    return (
        <header className='header'>
            <div className={s.headerWrapper}>
                <div className={s.item}>иконка и название</div>
                <div className={s.navidgations}>навигация с выпадающими списками/оповещение</div>
                {me}
            </div>
        </header>);
}

export default Header;