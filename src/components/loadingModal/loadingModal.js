import React from "react"

function LoadingModal(){

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