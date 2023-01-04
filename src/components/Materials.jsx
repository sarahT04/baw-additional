import React from 'react'

function Materials({ materialsBank, activityMaterial }) {
    return (
        <div className='wrapper materials'>
            {activityMaterial}
            <h2>To read:</h2><br />
            <ul>
                {
                    materialsBank.map((item) => (
                        <>
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    title={item.title}>
                                    {item.description}
                                </a>
                            </li>
                            <br />
                        </>
                    ))
                }
            </ul>
        </div >
    )
}

export default Materials