import React, { useEffect } from "react"
import M from 'materialize-css/dist/js/materialize.min.js'


function RemoveModal(props){

    useEffect(() => {
        const elems = document.querySelectorAll('.modal')
        const instances = M.Modal.init(elems, {})
    }, [])
    

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
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Remover</a>
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
            </div>
        </div>
    )
}

export default RemoveModal