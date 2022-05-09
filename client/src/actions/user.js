import axios from 'axios'

export const authentication = async (login, password) => {
    try {
        const response = await axios.post(`http://192.168.56.1:5763/api/auth/login`, {
            login,
            password
        })
        console.log(response.data.message)
    } catch (e) {
        alert(e)
    }
}

export const registration = async (name, login, email, password) => {
    try {
        const response = await axios.post(`http://192.168.56.1:5763/api/auth/reg`, {
            name,
            login,
            email,
            password
        })
        console.log(response.data.message)
    } catch (e) {
        alert(e)
    }
}
