export const createID = (arr) => {
	let newArr = [];
	arr.forEach(element => {
		newArr.push(element.Id)
	});
	let max = newArr.sort((a, b) => a - b)[newArr.length - 1];
	return max;
}