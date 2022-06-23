import React from "react";
import style from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {

	state = {
		editMode: false
	}

	activateEditMode ()  {
		//*=============setState -это асинхронный метод!!!===================================
		this.setState({
			editMode: true
		})
		//*=============forceUpdate -насильный перерендеринг===================================
		// this.forceUpdate();
	}
	deactivateEditMode ()  {
		this.setState({
			editMode: false
		})
	}
	render() {
		return (
			<div className={style.profileStatus}>
				{!this.state.editMode &&
					<div >
						<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div >
						<input autoFocus={true} className={style.input} onBlur={this.deactivateEditMode.bind(this)}
						 onChange={()=>{}} value={this.props.status} />
					</div>
				}
			</div>
		)
	}
}

export { ProfileStatus };