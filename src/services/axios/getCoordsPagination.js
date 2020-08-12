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
            return {
                coords: res.data.coords,
                pages: res.data.pages
            }
        })
        .catch(err => {
            console.log('deu Ruim')
        })
    
    return response
}

export default axiosGetCoordsPagination