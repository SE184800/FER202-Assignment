import React from 'react'
import { useState } from 'react';
import data from './ListOfOrchids';
import { Link } from 'react-router-dom';
export default function Orchids() {
    // eslint-disable-next-line
    const [orchid, setOrchids] = useState([]);
    return (
        <div className='Container'>
            {data.map((item) => (
                <div className='Column' key={item.id}>
                    <div className='Card'>
                        <img src={item.image} alt='' />
                        <h2> {item.name}</h2>
                        <p>{item.origin}</p>
                        <p>{item.category}</p>
                        <Link to={`Detail/${item.id}`}>
                            <p><button>Detail</button></p>
                        </Link>
                </div>
                    </div>
    ))
}
                </div >
            )
}
