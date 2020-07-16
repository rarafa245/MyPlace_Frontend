import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'
import { SubmitButton } from '../../../../../components'
import { axiosRegisterCoords } from '../../../../../services'


function AddCoordForm(props){

    const [localName, setLocalName] = useState('')
    const [group, setGroup] = useState('')
    const x = useSelector( state => state.x )
    const y = useSelector( state => state.y )

    useEffect(() => {
        const elems = document.querySelectorAll('select')
        const instances = M.FormSelect.init(elems, {})[0]

        props.setExpandNav('expand')
        props.setActiveIcon('disabled')

        return () => {
            props.setExpandNav('')
            props.setActiveIcon('')
        }

    }, [])


    const submitLocal = () => {

        props.cleanRegisterCoordsFlag()

        const LOGINDATA = new FormData(event.target)
        LOGINDATA.append('x', x)
        LOGINDATA.append('y', y)

        axiosRegisterCoords(LOGINDATA)
            .then(() => {
                console.log('Deu')
            })

    }

    const cancelSubmit = () => {
        props.cleanRegisterCoordsFlag()
        location.reload();
    }


    return (
        <div>
            <p className="ml-1"><b>Insira as Informações</b></p>
            <form onSubmit={submitLocal}>
                <div className="row">
                    <div className="input-field col s11">
                        <input  className="validate"
                                placeholder="Nome do Local" 
                                name="localName"
                                value={localName}
                                onChange={ e => setLocalName(e.target.value) }
                                type="text"
                                 />
                    </div>

                    <div className="input-field col s11">
                        <select name="group" onChange={e => setGroup(e.target.value) }>
                            <option name="group" value="Restaurante">Restaurante</option>
                            <option name="group" value="Lazer">Lazer</option>
                            <option name="group" value="Serviços">Serviços</option>
                        </select>
                    </div>

                    <div className="col s11">
                        <p ><b>Insira uma Nota</b></p>
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

                    <div className="row center-align">
                        <SubmitButton message='Registrar' />
                        <button onClick={cancelSubmit} className=" mt-1 ml-1 waves-effect waves-light teal dark-2 btn">Cancelar</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )

}

export default AddCoordForm