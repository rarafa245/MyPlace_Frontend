import React, { useState, useEffect } from "react"
import { axiosRemoveCoords } from './../../../services'
import M from 'materialize-css/dist/js/materialize.min.js'


function RemoveModal(props){

    const [localID, setLocalID] = useState()

    useEffect(() => {
        setLocalID(props.localID)
        const elems = document.querySelectorAll('.modal')
        const instances = M.Modal.init(elems, {})
    }, [])
    

    const removeCoords = () => {
        console.log(props)
        console.log(props.localID)
       // axiosRemoveCoords(localID)
    }


    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <i className="material-icons right">warning</i>
                <h5>Deseja Mesmo Remover Este Local?</h5>
            
                <p className="warning"> 
                    Ao remover o local desejado, não será mais possivel vizualiza-lo. 
                    Os dados armazenados serão excluidos permanentemente.<br/>
                    Deseja continuar com esse processo?
                </p>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={() => removeCoords()} className="waves-effect waves-green btn-flat">Remover</a>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
            </div>
        </div>
    )
}

export default RemoveModal