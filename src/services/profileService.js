import * as tokenService from '../services/tokenService'

const BASE_URL = '/api/profiles'

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


export const addFriend = async (profile) => {
  try {
    const res = await fetch(`${BASE_URL}/friends/${profile}`, {
      method: "PUT",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const UnaddFriend = async (profile) => {
  try {
    const res = await fetch(`${BASE_URL}/friends/${profile}`, {
      method: "PATCH",
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() },
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

async function profileInfo(Id) {
  try {
    const res = await fetch(`${BASE_URL}/${Id}`,{
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken()},
    })

    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}
export const updateProfile = async (id, formData)=>{
  try{
    const res = await fetch(`${BASE_URL}/${id}`,{
      method:'PUT',
      headers: { 
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}
export const createTodo = async (todo) => {
	try {
		const res = await fetch(`${BASE_URL}/todos`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
			body: JSON.stringify(todo),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteTodo = async (todoId) => {
  try {
    await fetch(`${BASE_URL}/todos/${todoId}` , {
      method:'DELETE',
    	headers: {
				'content-type': 'application/json',
				Authorization: `Bearer ${tokenService.getToken()}`,
			},
    })
  } catch (error) {
		throw error;
	}
}

export { 
  getAllProfiles,
  profileInfo,
}
