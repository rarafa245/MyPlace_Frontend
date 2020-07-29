import React, { useState, useEffect } from "react"
import M from 'materialize-css/dist/js/materialize.min.js'
import { axiosRemoveCoords } from './../../../services'


function RemoveModal(props){

    const [loading, setLoading] = useState()

    useEffect(() => {
        const elems = document.querySelectorAll('.removeModal')
        const instances = M.Modal.init(elems, {})

    }, [])

    const removeCoords = () => {
        const elems = document.querySelectorAll('#loadingModal')
        const instance = M.Modal.init(elems, {dismissible: false})[0]
        instance.open()

        axiosRemoveCoords(props.localID)
            .then((response) => {
                (response.status)   ? M.toast({ html: response.message, completeCallback: () => window.location.reload() })
                                    : M.toast({ html: response.message})
            })
            
        instance.close()   
    }


    return (
        <div id={`modal${props.localID}`} className="modal removeModal">
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
                <a href="#!" onClick={() => removeCoords()} value={true} className="modal-close waves-effect waves-green btn-flat">Remover</a>
                <a href="#!" value={false} className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
            </div>
        </div>
    )
}

export default React.memo(RemoveModal)