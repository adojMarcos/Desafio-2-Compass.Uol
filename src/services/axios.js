import axios from 'axios'

const baseUrl = 'https://api.github.com/users'

const getAll = async (user) => {
    const response = await axios.get(`${baseUrl}/${user}`)
    return response.data
}

export default { getAll }