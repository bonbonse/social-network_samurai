import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    let isActive = ({isActive}) => isActive ? s.activeLink : undefined
    let myProfileURL = `/profile/30092`;
    return (
        <nav className='nav'>
            <div className={s.item}>
                <NavLink to={myProfileURL} className={isActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={isActive}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={isActive}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>Friends</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Setting</a>
            </div>
        </nav>
    );
}
export default Navbar;
