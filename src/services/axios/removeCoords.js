import axios from 'axios'

async function axiosRemoveCoords(localID){

   const response = await axios.delete('http://192.168.0.27:5000/deleteCoords', {
            data: {localID: localID},
            headers: {
                'UID': localStorage.getItem('userId'),
                'authentication': localStorage.getItem('JWT')
            }
        })
        .then(res => {
            if (res.data.status)
                return {
                    status: res.data.status,
                    message: res.data.message
                }
            else
                return {
                    status: res.data.status,
                    message: res.data.message,
                    jwtError: res.data.jwtError,
                }
        })
        .catch(err => {
            return {
                status: false,
                jwtError: false,
                message: 'Erro de Conexão, Tente Novamente!'
            }
        })
    
    return response
}

export default axiosRemoveCoords