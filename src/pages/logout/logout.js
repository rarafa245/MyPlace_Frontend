
import React, { useEffect } from 'react'

function LogoutPage (props) {

    useEffect(() => {
        localStorage.clear()
        props.history.push('/')
    }, [])

    return (<div></div>)
}

export default LogoutPage