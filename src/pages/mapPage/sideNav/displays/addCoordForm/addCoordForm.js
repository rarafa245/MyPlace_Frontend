import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

function AddCoordForm(){

    useEffect(() => {
        const elems = document.querySelectorAll('select')
        const instances = M.FormSelect.init(elems, {})
    }, [])

    return (
        <div>
            <p className="ml-1"><b>Insira as Informações</b></p>
            <form>
                <div className="row">
                    <div className="input-field col s11">
                        <input placeholder="Nome do Local" id="first_name" type="text" className="validate" />
                    </div>

                    <div className="input-field col s11">
                        <select>
                        <option value="Restaurante">Restaurante</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Serviços">Serviços</option>
                        </select>
                    </div>

                    <div className="col s11">
                        <p ><b>Insira uma Nota</b></p>
                        <p>
                            <label>
                                <input name="group1" type="radio" /><span>1</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" /><span>2</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" /><span>3</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" /><span>4</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="group1" type="radio" /><span>5</span>
                            </label>
                        </p>
                    </div>

                </div>
            </form>
        </div>
    )

}

export default AddCoordForm