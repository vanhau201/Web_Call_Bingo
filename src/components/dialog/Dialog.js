import React from 'react'
import "../dialog/Dialog.css"
const Dialog = ({ massage, handleConfirm }) => {
    return (
        <div className='dialog'>
            <div>
                <h3>{massage}</h3>
                <div>
                    <button onClick={() => handleConfirm(true)}>Có</button>
                    <button onClick={() => handleConfirm(false)}>Không</button>
                </div>
            </div>
        </div >
    )
}

export default Dialog