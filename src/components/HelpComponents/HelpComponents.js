// * =====================Для компоненты ProfileInfo ======================
export const splitStringWithSpaces = (str) => {
	let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for (let char of str) {
		if (caps.includes(char)) {
			str = str.replace(char, " " + char)
		}
	}
	str = str[0].toUpperCase() + str.slice(1).toLowerCase()+" :";
	return str
}

export 	const convertObjectToArray = (obj) => {
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
export const logicFuncYes=(value) =>{
	if(value===true) return "YES"
	else return value
}
export const logicFuncNo=(value) =>{
	if(value===false) return "NO"
	else return "Нет данных"
}
// * =====================Для компоненты ProfileInfo ======================