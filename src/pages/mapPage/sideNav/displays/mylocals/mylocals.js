import React from 'react'

function MyLocals() {

    const clicktest = () => {
        const elems = document.querySelectorAll('.leaflet-container')
        console.log(elems)
    }


    return (
        <ul className="collection">
            <li onClick={() => clicktest()} className="collection-item">local1</li>
            <li className="collection-item">local2</li>
            <li className="collection-item">local3</li>
            <li className="collection-item">local4</li>
        </ul>
    )

}

export default MyLocals