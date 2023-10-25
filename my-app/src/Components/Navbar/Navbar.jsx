import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Navbar = (props) => {
    let isActive = ({isActive}) => isActive ? s.activeLink : undefined
    let myProfileURL = `/profile/${props.userId}`;
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

let mapStateToProps = (state) => {
    return {
        userId: state.auth.id
    }
}
export default connect(mapStateToProps, {})(Navbar);
