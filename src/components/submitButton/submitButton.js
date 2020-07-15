import React from 'react'

function SubmitButton(props){
    
    return (
        <button className="btn waves-effect waves-light mt-1 teal dark-2" 
                type="submit" 
                name="action">
        {props.message}
        </button>
    )
}

export default SubmitButton