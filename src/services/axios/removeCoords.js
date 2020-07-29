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

export default axiosRemoveCoords