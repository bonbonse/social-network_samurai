import s from './ProfileInfo.module.css'
import Preloader from "../../Users/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader />
    return (
        <div className={s.row}>
            <img src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg' />
            <div>{props.profile.fullName}</div>
            <div>14</div>
            <div>{props.profile.aboutMe}</div>
        </div>
    );
}

export default ProfileInfo;