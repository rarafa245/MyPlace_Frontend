import axios from 'axios'

async function axiosGetCoordsPagination(page){

   const response = await axios.get(`http://192.168.0.27:5000/pagination?page=${page}`,{
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
                    coords: res.data.coords
                }
            else
                return {
                    status: res.data.status,
                    jwtError: res.data.jwtError
                }
        })
        .catch(err => {
            return {
                status: false,
                jwtError: false
            }
        })

    return response
}

export default axiosGetCoordsPagination
