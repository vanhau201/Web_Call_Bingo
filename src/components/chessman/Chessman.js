import React from 'react'
import "../chessman/Chessman.css"
const Chessman = ({ numbers, color }) => {
    return (
        <div className='chessman' style={{ borderColor: color }}>
            <p>{numbers}</p>
        </div>
    )
}

export default Chessman