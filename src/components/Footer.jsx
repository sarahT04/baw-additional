import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <Link to="/">
                <h4>&larr; Back to main website</h4>
            </Link>
        </div>
    )
}

export default Footer