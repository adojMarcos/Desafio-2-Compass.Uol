import axios from 'axios'

const baseUrl = 'https://api.github.com/users'

const getUser = async (user) => {
    const response = await axios.get(`${baseUrl}/${user}`)
    return response.data
}

const getRepos = async (url) => {
    const response = await axios.get(url)
    return response.data
}

export default { getUser, getRepos }