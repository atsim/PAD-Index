import React from 'react';
import Cell from './cell';
import './styles/CardList.css';
import {monsters} from './monsterList.js';


const CardList = ({handleOnClick, currentCard}) => {

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", "https://www.padherder.com/api/monsters/", false );
  xmlHttp.send( null );
  const req = JSON.parse(xmlHttp.responseText);
  const cells = req.map((monster) => {
    return (
      <Cell
        open={monster.id == currentCard}
        key={monster.id}
        id = {monster.id}
        icon={monster.image60_href}
        handleOnClick = {handleOnClick}/>
      );
  });
  
  return (
    <section className="card-list">
      {cells}
    </section>
  )
}


export default CardList;