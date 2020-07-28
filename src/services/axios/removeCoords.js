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
            console.log(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    
    return response
}

export default axiosRemoveCoords