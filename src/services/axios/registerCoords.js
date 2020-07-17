import axios from 'axios'

async function axiosRegisterCoords(body){

   const response = await axios.post('http://192.168.0.27:5000/registerCoords', body,{
            headers: {
                'UID': localStorage.getItem('userId')
            }
        })
        .then(res => {
            return {
                status: res.data.status,
                message: res.data.message
            }

        })
        .catch(err => {
            return {
                status: false,
                message: 'Erro de Conexão, Tente Novamente!'
            }
        })
    
    return response
}

export default axiosRegisterCoords