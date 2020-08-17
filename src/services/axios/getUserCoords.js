import axios from 'axios'

async function axiosGetUserCoords(){

   const response = await axios.get('http://192.168.0.27:5000/userCoords',{
            headers: {
                'Content-Type': 'multipart/form-data',
                'UID': localStorage.getItem('userId'),
                'authentication': localStorage.getItem('JWT')
            }
        })
        .then(res => {
            if (res.data.status)
                return {
                    status: res.data.status,
                    coords: res.data.coords,
                    count: res.data.coords
                }
            else 
                return {
                    status: res.data.status,
                    message: 'Ocorreu um erro. Tente novamente!'
                }
        })
        .catch(err => {
            return {
                status: false,
                message: 'Erro de Conexão. Tente novamente!'
            }
        })
    
    return response
}

export default axiosGetUserCoords