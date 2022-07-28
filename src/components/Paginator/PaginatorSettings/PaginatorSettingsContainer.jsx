import { connect } from "react-redux";
import { compose } from "redux";
import { setSelected_PagesInBlock, setSelected_PageSize } from "../../../redux/users_selectors.js";
import { setNewPaginatorSettings } from "../../../redux/users_reducer.js";
import { PaginatorSettings } from "./PaginatorSettings.jsx";
import { WithAuthRediredct } from "../../HOC/WithAuthRedirect.js";


const mapStateToProps = (state) => {
	return {
		pageSize: setSelected_PageSize(state),
		pagesInBlock: setSelected_PagesInBlock(state),
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		setNewPaginatorSettings : (pageSize, pagesInBlock) => { dispatch(setNewPaginatorSettings(pageSize, pagesInBlock)) },
	}
}

const PaginatorSettingsContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRediredct
)(PaginatorSettings)

export default PaginatorSettingsContainer;