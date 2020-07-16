import axios from 'axios'

async function axiosRegisterCoords(body){

   const response = await axios.post('http://192.168.0.27:5000/registerCoords', body,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'UID': localStorage.getItem('userId')
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log('erro')
        })
    
    return response
}

export default axiosRegisterCoords