import axios from 'axios'

const baseUrl = 'https://api.github.com/users'

const getUser = async (user) => {
    const response = await axios.get(`${baseUrl}/${user}`)
    return response.data
}

const getRepos = async (url, page = 1) => {
    const response = await axios.get(`${url}?per_page=30&page=${page}`)
    return response.data
}

export default { getUser, getRepos }