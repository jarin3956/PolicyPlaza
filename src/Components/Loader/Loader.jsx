import React from 'react';
import './Loader.css'

function Loader() {
    return (
        <div className='loading-page'>
            <div className="loader-type">
                <div className="slide"><i></i></div>
                <div className="paper"></div>
                <div className="keyboard"></div>
            </div>
        </div>

    )
}

export default Loader