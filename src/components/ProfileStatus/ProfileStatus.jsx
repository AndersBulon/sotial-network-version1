import React from "react";
import style from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	
	activateEditMode = () => {
		if(this.props.myId === this.props.userId) {
			//*=============setState -это асинхронный метод!!!===================================
		this.setState({
			editMode: true
		})
		}
	}
	deactivateEditMode() {
		this.setState({
			editMode: false
		});
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e) => {
	this.setState({
		status: e.currentTarget.value
	})	
	}

	componentDidUpdate(prevProps, prevState){
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			});
		}
	}

	render() {
		return (
			<div className={style.profileStatus}>
				{!this.state.editMode &&
					<div >
						<span className={style.statusSpan} onClick={this.activateEditMode}>{this.props.status ? this.props.status : "No status"}</span>
					</div>
				}
				{this.state.editMode &&
					<div >
						<input autoFocus={true} className={style.statusInput} onBlur={this.deactivateEditMode.bind(this)}
							onChange={this.onStatusChange} value={this.state.status} />
					</div>
				}
			</div>
		)
	}
}

export { ProfileStatus };