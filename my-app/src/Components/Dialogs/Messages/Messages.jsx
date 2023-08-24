import s from './Messages.module.css'
import {Route} from "react-router-dom";

const Messages = (props) => {
    return (
        <div>
            {props.name}
            {props.message}
        </div>
        );
}

export default Messages;