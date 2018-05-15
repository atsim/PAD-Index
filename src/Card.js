class Card {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    //this.sprite = http://www.puzzledragonx.com/en/img/monster/MONS_3968.jpg;
    this.activeSkill = data.active_skill;
    this.leaderSkill = data.leader_skill;
  }
}

export default Card;