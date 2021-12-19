import axios from 'axios';
const key = process.env.API_KEY

const page = 1
const category = ['IT', 'software']

async function index(req, res) {
  try {
    const BASE_URL = `https://www.themuse.com/api/public/jobs?category=${category}&page=${page}&descending=true?api_key=${key}`
    const response = await axios.get(BASE_URL)
    res.status(200).json(response.data)
  }catch(err) {
    return res.status(500).json(err)
  }
}

export { 
  index,
};

