import React from 'react';
import './styles/DetailView.css';

const DetailView = ({card}) => {

  return (
    <section className="detail-view">
      <img alt="" src={'http://www.puzzledragonx.com/en/img/monster/MONS_' + card.id + '.jpg'} className='sprite-image' />
      <div className='data-wrapper'>
        <h1 className='data-name'>Name: {card.name}</h1>
        <p className="data-char">Leader Skill: {card.leaderSkill}</p>
        <p className="data-char">Active Skill: {card.activeSkill}</p>
      </div>
    </section>
  )
}

export default DetailView;