
import React, { useEffect } from 'react'

function LogoutPage (props) {

    useEffect(() => {
        localStorage.clear()
        props.history.push('/')

        return () => location.reload()
    }, [])

    return (<div></div>)
}

export default LogoutPage