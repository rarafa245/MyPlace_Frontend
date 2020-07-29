import React, { useState, useEffect } from "react"
import M from 'materialize-css/dist/js/materialize.min.js'


function LoadingModal(){

    const [modal, setModal] = useState()

    useEffect(() => {
        const elems = document.querySelectorAll('#loadingModal')
        const instances = M.Modal.init(elems, {})[0]
        instances.open()
        setModal(instances)
    }, [])


    return (
        <div id="loadingModal" className="modal">
            <div className="modal-content center-align">
                <h5>Aguarde Um Momento</h5>
                
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(LoadingModal)