// import * as tokenService from './tokenService'
const BASE_URL = '/api/jobs/' 

export const findJob = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}?category=${category}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}