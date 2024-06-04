import React from 'react'
import { orchids } from './ListOfOrchids'
export default function Orchids() {
    return (
        <div className='Container'>
            {Orchids.map((orchids) => (
                <div className='Column' key={orchids.id}>
                    <div className='Card'>
                        <img src={orchids.image} alt='' />
                        <h2> {orchids.name}</h2>
                        <p>{orchids.origin}</p>
                        <p>{orchids.category}</p>
                        <p><button onClick={() => { setOrchids(orchids) }}>
                            <a href='#popup' id='openPopUp'>Detail</a>
                        </button></p>
                    </div>
                </div>
            ))}
            <div id='popup' className='overlay'>
                <div className='popup'>
                    <img src={orchids.image} alt='' />
                    <h2>{orchids.name}</h2>
                    <a className='close' href='#home'>&times;</a>
                </div>
            </div>
        </div>
    )
}
