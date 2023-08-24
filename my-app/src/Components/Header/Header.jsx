import s from './Header.module.css'

const Header = () => {
    return (
        <header className='header'>
            <div className={s.headerWrapper}>
                <div className={s.item}>иконка и название</div>
                <div className={s.navigations}>навигация с выпадающими списками/оповещение</div>
            </div>
        </header>);
}

export default Header;