import style from "./Paginator.module.css"
import React from "react";

export const Paginator = (props) => {

	const blockStructureCreation = () => {
		let pages = (Math.ceil(props.totalUsersCount / props.pageSize));
		let totalBlockCount = (Math.ceil(props.totalUsersCount / props.pagesInBlock / props.pageSize));
		let blockStructure = {}
		let arr = [];
		let counter = pages;
		for (let i = 1; i <= totalBlockCount; i++) {
			if (counter - props.pagesInBlock > 0) {
				for (let j = 1; j <= props.pagesInBlock; j++) {
					arr.push(j + props.pagesInBlock * (i - 1));
				}
				blockStructure[i] = arr;
				counter = counter - props.pagesInBlock;
				arr = []
			}
			else {
				for (let k = 1; k <= counter; k++) {
					arr.push(k + props.pagesInBlock * (i - 1));
				}
				blockStructure[i] = arr;
			}
		}
		return blockStructure;
	}

	let [totalBlock, setTotalBlock] = React.useState(Math.ceil(props.totalUsersCount / props.pagesInBlock / props.pageSize))
	let [totalPages, setTotalPages] = React.useState(Math.ceil(props.totalUsersCount / props.pageSize))

	React.useEffect(() => {
		if (props.totalUsersCount > 0) {
			setTotalBlock(Math.ceil(props.totalUsersCount / props.pagesInBlock / props.pageSize))
			setTotalPages(Math.ceil(props.totalUsersCount / props.pageSize))
			props.getUsers(props.currentPage, props.pageSize, totalBlock, totalPages)
		}
		// eslint-disable-next-line
	}, [props.currentPage, totalBlock, props.totalUsersCount])

	React.useEffect(() => {
		if (props.totalBlockCount > 1) {
			props.setBlockStructure(blockStructureCreation())
		}
		// eslint-disable-next-line
	}, [props.totalBlockCount])

	return (
		<div className={style.paginator}>
			<div className={style.pages}>
				<button disabled={props.currentPagesBlock === 1} onClick={props.goFirstPageNumber} className={style.left_arr}>
					&lt;&lt;
				</button>

				{props.blockStructure[props.currentPagesBlock].map(el =>
					<span onClick={() => props.setCurrentPage(el)} key={el} className={props.currentPage === el ? style.selectedPage : style.pageNum}>
						{el}
					</span>
				)}

				<button disabled={props.currentPagesBlock === props.totalBlockCount} onClick={props.goEndPageNumber} className={style.right_arr}>
					&gt;&gt;
				</button>
			</div>

			<div className={style.buttons_block}>
				<button disabled={props.currentPagesBlock === 1} onClick={props.showPrevBlock} className={`${style.prevbtn} button`}>
					PREVIOUS
				</button>
				<button disabled={props.currentPagesBlock === props.totalBlockCount} onClick={props.showNextBlock} className={`${style.nextbtn} button`}>
					NEXT
				</button>
			</div>
		</div>
	)
}