import {Component} from "react";

class ProfileStatus extends Component {
    state = {
        statusText: this.props.status,
        editMode: false
    }

    componentDidMount() {
        this.setState({
            statusText: this.props.status
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.state.statusText = this.props.status;
        }
    }

    activateInputStatus = () => {
        this.setState(
            {editMode: true}
        )
    }
    deactivateInputStatus = () => {
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.statusText)
    }
    ChangeStatus = (e) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }

    render() {
        return <div>
            <div>
                {!this.state.editMode &&
                    <span  onDoubleClick={this.activateInputStatus} >{this.props.status ? this.props.status : 'No status' }</span>
                }
            </div>
            <div>
                {this.state.editMode &&
                    <input autoFocus={true}
                           onBlur={this.deactivateInputStatus}
                           value={this.state.statusText}
                           onChange={e => this.ChangeStatus(e)}/>
                }
            </div>
        </div>;
    }
}



export default ProfileStatus;