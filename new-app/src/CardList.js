import React from 'react'
import Card from './Card';


export default function CardList({ robots }) {

  // ------ TESTING HOW TO SEE ERROR BOUNDARY I CREATED ------- 


  // if (true) {
  //   throw new Error('NOOOOOOOO! IT BROKE')
  // }  


    const cardComponent = robots.map((user, i) => {
        return (
           <Card key={i}
           id={robots[i].id}
           name={robots[i].name}
           email={robots[i].email}
         />
       );
   }) 

  return (
    <div className='app'>
   {cardComponent}
    </div>
  );
}
