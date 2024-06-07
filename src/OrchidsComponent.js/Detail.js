import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import data from './ListOfOrchids';
export default function Detail() {
    const [orchids, setOrchids] = useState([]);
    const userName= useParams();
    const orchidFinder= data.find(obj => {
        return obj.id==userName.id;
    });
  return (
    <div>
        {data.map((item)=>(
            <div classname='Layout'>
                <img src={'Detail/${item.image}'} key={item.id}/>
                <h2>{item.name}</h2>
                <p>{item.info}</p>
                </div>
        ))}
    </div>
  )
}
