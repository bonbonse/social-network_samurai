import s from './ProfileInfo.module.css'
import Preloader from "../../Users/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
let defaultAva = 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader />
    let ava = props.profile.photos.large;
    if (ava === null)
        ava = defaultAva;
    return (
        <div>
            <div className={s.row}>
                <img src={ava} />
                <div>{props.profile.fullName}</div>
                <div>14</div>
                <div>{props.profile.aboutMe}</div>
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

export default ProfileInfo;