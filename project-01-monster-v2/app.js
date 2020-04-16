new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    logs: [],
    buttonsDisabled: false,
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
      const targetsAvatar = {
        Monster: document.querySelector(".monster-avatar img"),
        Player: document.querySelector(".player-avatar img"),
      };
      this.buttonsDisabled = false;

      targetsAvatar.Monster.classList.value = "";
      targetsAvatar.Player.classList.value = "";
    },
    attack(special) {
      this.buttonsDisabled = true;

      this.hurt("monsterLife", 5, 10, special, "Player", "Monster", "player");
      if (this.monsterLife > 0) {
        setTimeout(() => {
          this.hurt("playerLife", 7, 12, false, "Monster", "Player", "monster");

          setTimeout(() => {
            this.buttonsDisabled = false;
          }, 500);
        }, 500);
      }
    },
    hurt(attr, min, max, special, source, target, cls) {
      const plus = special ? 5 : 0;
      const hurt = this.getRandom(min + plus, max + plus);
      this[attr] = Math.max(this[attr] - hurt, 0);
      this.registerLog(`${source} wounded ${target} with ${hurt}.`, cls);
      this.hurtAnimation(target, special);
    },
    healAndHurt() {
      this.buttonsDisabled = true;

      this.heal(10, 15);
      setTimeout(() => {
        this.hurt("playerLife", 7, 12, false, "Monster", "Player", "monster");

        setTimeout(() => {
          this.buttonsDisabled = false;
        }, 500);
      }, 200);
    },
    hurtAnimation(target, special) {
      const targetsAvatar = {
        Monster: document.querySelector(".monster-avatar img"),
        Player: document.querySelector(".player-avatar img"),
      };

      targetsAvatar[target].classList.value = "animated";
      targetsAvatar[target].classList.add("flash");
      setTimeout(() => {
        if (special) {
          targetsAvatar[target].classList.add("wobble");
        } else {
          targetsAvatar[target].classList.add("shake");
        }
      }, 200);
    },
    heal(min, max) {
      const heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog(`Player gain force of ${heal}.`, "player");
      this.healAnimation();
    },
    healAnimation() {
      const target = document.querySelector(".player-avatar img");

      target.classList.value = "animated";
      target.classList.add("pulse");
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
  },
  watch: {
    hasResult(value) {
      if (value) this.running = false;
      const targetsAvatar = {
        Monster: document.querySelector(".monster-avatar img"),
        Player: document.querySelector(".player-avatar img"),
      };

      if (this.monsterLife == 0) {
        targetsAvatar.Monster.classList.value = "animated";
        targetsAvatar.Monster.classList.add("bounceOut");
        targetsAvatar.Player.classList.value = "animated";
        targetsAvatar.Player.classList.add("infinite");
        targetsAvatar.Player.classList.add("pulse");
      } else if (this.playerLife == 0) {
        targetsAvatar.Player.classList.value = "animated";
        targetsAvatar.Player.classList.add("bounceOut");
        targetsAvatar.Monster.classList.value = "animated";
        targetsAvatar.Monster.classList.add("infinite");
        targetsAvatar.Monster.classList.add("pulse");
      }
    },
  },
});
