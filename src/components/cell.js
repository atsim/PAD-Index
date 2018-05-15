import React from 'react';
import './styles/cell.css';


const Cell = (props) => {
  const style = { backgroundImage: 'url(https://www.padherder.com' + props.icon + ')' };
  return <button style={style} id={'monster_' + props.id} className={"cell " + (props.open ? "open" : "close")} onClick={() => props.handleOnClick(props.id)}></button>
};


export default Cell;