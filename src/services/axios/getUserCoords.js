import axios from 'axios'

async function axiosGetUserCoords(){

   const response = await axios.get('http://192.168.0.27:5000/userCoords',{
            headers: {
                'UID': localStorage.getItem('userId')
            }
        })
        .then(res => {
            return {
                coords: res.data.coords
            }
        })
        .catch(err => {
            return {
                coords: []
            }
        })
    
    return response
}

export default axiosGetUserCoords