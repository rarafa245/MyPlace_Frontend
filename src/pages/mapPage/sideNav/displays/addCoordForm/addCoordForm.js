import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSubmitMessage, cleanRegisterCoordsFlag } from '../../../redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import { SubmitButton } from '../../../../../components'
import { axiosRegisterCoords } from '../../../../../services'


function AddCoordForm(props){
    /* Add Coords Options Component
        :name - addCoordsForm : Form with informations to Add Coords
        :props  - sideNav : Instance of Navbar  - expand : open() / close: close()
                - setActiveIcon : Function to activade / disavble Icon - null / disabled
    */


    // Input states
    const [localName, setLocalName] = useState('')
    const [group, setGroup] = useState('')
    const [notes, setNotes] = useState('')

    // Redux
    const dispatch = useDispatch()
    const x = useSelector( state => state.addLocal.x )
    const y = useSelector( state => state.addLocal.y )


    useEffect(() => {
        const elems = document.querySelectorAll('select')       // Select list
        const instances = M.FormSelect.init(elems, {})[0]

        props.setExpandNav('expand')
        props.setActiveIcon('disabled')

        return () => {
            props.setExpandNav('')
            props.setActiveIcon('')
        }

    }, [])


    const submitLocal = () => {

        event.preventDefault()

        const elems = document.querySelectorAll('#loadingModal')
        const instances = M.Modal.init(elems, {dismissible: false})[0]
        instances.open()

        const LOCALDATA = new FormData(event.target)
        LOCALDATA.append('x', x)
        LOCALDATA.append('y', y)

        axiosRegisterCoords(LOCALDATA)
            .then((response) => {
                props.sideNav.close()
                props.setActiveIcon('')
                dispatch(cleanRegisterCoordsFlag())
                dispatch(setSubmitMessage(response.status, response.message ))
                instances.close()
            })
            .catch((error) => {
                props.sideNav.close()
                props.setActiveIcon('')
                dispatch(cleanRegisterCoordsFlag())
                dispatch(setSubmitMessage(error.status, error.message))
                instances.close()
            })
    }

    const cancelSubmit = () => {
        props.sideNav.close()
        dispatch(cleanRegisterCoordsFlag())
        location.reload();
    }


    return (
        <div>
            <p className="ml-1 op-3"><b>Insira as Informações</b></p>
            <form name="addCoordsForm" onSubmit={submitLocal}>
                <div className="row">

                    <div className="input-field col s11">
                        <i className="material-icons small prefix">mode_edit</i>
                        <input  id="local"
                                className="validate"
                                name="localName"
                                data-length="35"
                                value={localName}
                                onChange={ e => setLocalName(e.target.value) }
                                type="text"/>
                        <label htmlFor="local">Nome do Local</label>
                    </div>

                    <div className="input-field col s11">
                        <i className="material-icons small prefix">assignment</i>
                        <select name="group" value={group} onChange={e => setGroup(e.target.value)}>
                            <option name="group" className="op-3" value="Lazer">Lazer</option>
                            <option name="group" className="op-3" value="Restaurante">Restaurante</option>
                            <option name="group" className="op-3" value="Serviços">Serviços</option>
                        </select>
                    </div>

                    <div className="col s11">
                        <p className="op-3"><b>Insira uma Nota</b></p>
                        <p>
                            <label>
                                <input name="rating" type="radio" value="5" /><span>5</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="rating" type="radio" value="4" /><span>4</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="rating" type="radio" value="3" /><span>3</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="rating" type="radio" value="2" /><span>2</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="rating" type="radio" value="1" /><span>1</span>
                            </label>
                        </p>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons small prefix">note</i>
                            <textarea   id="textarea1"
                                        name="notes"
                                        className="materialize-textarea"
                                        value={notes}
                                        onChange={ e => setNotes(e.target.value) } />
                            <label htmlFor="textarea1">Descrição (Opcional)</label>
                        </div>
                    </div>

                    <div className="row center-align mb-2">
                        <SubmitButton message='Registrar' />
                        <button onClick={cancelSubmit} className=" mt-1 ml-1 waves-effect waves-light teal dark-2 btn">Cancelar</button>
                    </div>

                </div>
            </form>
        </div>
    )

}

export default AddCoordForm
