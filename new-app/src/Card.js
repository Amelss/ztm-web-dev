import React from 'react'

export default function Card({name, email, id}) {
  return (
    <div className='card'>
      <img src={`https://robohash.org/tester/${id}`} alt="robot card" className='robo-img'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
