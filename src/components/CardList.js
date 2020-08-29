import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

  const cardComponent = robots.map(
    (user, i) => {
      return (
        <Card 
          key={robots[i].id} 
          id={robots[i].id+4} 
          name={robots[i].name} 
          email={robots[i].email} 
          sorce={`https://robohash.org/${robots[i].id+4}.png/set_set4?size=100x100`}/>)
    }
  );

  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;