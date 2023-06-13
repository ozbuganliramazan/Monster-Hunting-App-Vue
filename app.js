new Vue({
  el: "#app",
  data: {
    player_heal: 100,
    moster_heal: 100,
    game_is_on: false,
    attack_multipler: 10,
    special_attack_multiple: 25,
    heal_up_multipler: 20,
    moster_attack_multipler: 15,

    logs: [],
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      var point = Math.ceil(Math.random() * this.attack_multipler);
      this.moster_heal -= point;
      this.add_to_heal({ turn: "p", text: "OYUNCU ATAĞI(" + point + ")" });
      this.moster_attack();
    },
    speciala_attack: function () {
      var point = Math.ceil(Math.random() * this.special_attack_multiple);
      this.moster_heal -= point;
      this.add_to_heal({ turn: "p", text: "ÖZEL OYUNCU ATAĞI(" + point + ")" });
      this.moster_attack();
    },
    heal_up: function () {
      var point = Math.ceil(Math.random() * this.heal_up_multipler);
      this.player_heal += point;
      this.add_to_heal({ turn: "p", text: "İLK YARDIM(" + point + ")" });
      this.moster_attack();
    },
    give_up: function () {
      this.player_heal = 0;
      this.add_to_heal({ turn: "p", text: "OYUNCU PES ETTİ!!!!" });
    },
    moster_attack: function () {
      var point = Math.ceil(Math.random() * this.moster_attack_multipler);
      this.player_heal -= point;
      this.add_to_heal({ turn: "m", text: "CANAVAR ATAĞI(" + point + ")" });
    },
    add_to_heal: function (log) {
      this.logs.push(log);
    },
  },
  watch: {
    player_heal: function (value) {
      if (value <= 0) {
        this.player_heal = 0;
        if (confirm("OYNU KAYBETTİN. Tekrar denemek iset misin")) {
          this.player_heal = 100;
          this.moster_heal = 100;
          this.logs = [];
        }
      } else if (value >= t100) {
        this.player_heal = 100;
      }
    },
    moster_heal: function (value) {
      if (value <= 0) {
        this.moster_heal = 0;
        if (confirm("OYNU KAZANDINIZ. Tekrar denemek iset misin")) {
          this.player_heal = 100;
          this.moster_heal = 100;
          this.logs = [];
        }
      }
    },
  },
});
