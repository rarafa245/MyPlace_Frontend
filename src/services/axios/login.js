import axios from 'axios'

async function axiosLogin(body){

   const response = await axios.post('http://192.168.0.27:5000/login', body,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            if (res.data.status) {
                return {
                    status: res.data.status,
                    message: 'SUCCESS',
                    JWT: res.data.JWT,
                    username: res.data.username,
                    email: res.data.email,
                    userId: res.data.userID
                }
            } 
            else {
                return {
                    status: res.data.status,
                    message: 'Invalid Email or Password !',
                }
            }
        })
        .catch(err => {
            return {
                status: false,
                message: 'An Error Has Occurred. Try Again !',
            }
        })
    
    return response
}

export default axiosLogin