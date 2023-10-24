function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterHealthStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: `${this.playerHealth}%` };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    winnerMessage() {
      if (this.winner === "monster") {
        return "You lost!";
      } else if (this.winner === "player") {
        return "You won!";
      } else {
        return "It's a draw";
      }
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },
  methods: {
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage("monster", "attack", damage);
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.addLogMessage("player", "attack", damage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const heal = getRandomValue(8, 20);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addLogMessage("player", "heal", heal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
}).mount("#game");
