// * =====================Для компоненты ProfileInfo ======================
export const splitStringWithSpaces = (str) => {
	let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let char of str) {
		if (caps.includes(char)) {
			str = str.replace(char, " " + char)
		}
	}
	str = str[0].toUpperCase() + str.slice(1).toLowerCase() + ":";
	return str
}

export const convertObjectToArray = (obj) => {
	let arr = []
	Object.entries(obj).forEach((entry) => {
		const [key,] = entry;
		if (key !== "contacts" && key !== "userId" && key !== "photos" && key !== "fullName") arr.push(entry)
	});
	Object.entries(obj.contacts).forEach((entry) => {
		arr.push(entry)
	});
	return arr
}
export const logicFuncYes = (value) => {
	if (value === true) return "YES"
	else return value
}
export const logicFuncNo = (value) => {
	if (value === false) return "NO"
	else return "Нет данных"
}
// * =====================Для компоненты ProfileInfo ======================

// * =====================Для Users_reducer ======================

export const updateObjectInArrayForReducer = (state, action, array, objPropName, newObjProps, ObjectKey) => {

	return (
		{
			...state,
			[ObjectKey]: array.map(el => {
				if (String(el[objPropName]) === String(action)) {
					return { ...el, ...newObjProps }
				}
				return el;
			})
		}
	)
}

// * =====================Для Users_reducer ======================

// * =====================Для Users ======================

export const statusHelper = (user, styleStatus, styleItem, styleText) => {
	if (user.status) {
		return (
			<div className={styleStatus}>
				<span className={styleItem}>
					Статус :
				</span>
				<span className={styleText}>
					{user.status.slice(0, 35)}
				</span>
			</div>
		)
	}
	if (!user.status) {
		return (
			<div className={styleStatus}>
				<span className={styleItem}>
					Статус :
				</span>
				<span className={styleText}>
					нет статуса
				</span>
			</div>
		)
	}
}

// * =====================Для Users ======================