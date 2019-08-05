// export function sendUserData(data){
// 	console.log("action @@@@ created", data);
// 	return {type: "ADD_USER_DATA", payload: data};
// }


// export function deleteUserData(idx){
// 	console.log("idx to delete", idx)
// 	return {type: "DELETE_USER_DATA", payload: idx};
// }

// export function updateUserData(userData, index){
// 	console.log("updated data", userData, index)
// 	return {type: "UPDATE_USER_DATA", payload: {userUpdatedData: userData, id: index}}
// }


export function setUserData(data){
	console.log(data);
	return {type: "ADD_USER_DATA", payload: data};
}