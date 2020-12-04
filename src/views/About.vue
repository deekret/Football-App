<template>
  <router-link to="/">back</router-link>
  <div class="about">
    <h1>This is an about page</h1>
    {{ this.teamId }}
    {{ this.filteredGamesList }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["year", "teamId"],

  data() {
    return {
      gameList: undefined,
      filteredGamesList: [],
      years: [2018, 2019, 2020],
    };
  },
  computed: {},

  methods: {
    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
  },
  mounted() {
    this.years.forEach((element) => {
      axios
        .get(
          "https://api.collegefootballdata.com/games?year=" +
            element +
            "&seasonType=regular"
        )
        .then((response) => {
          this.gameList = response.data;
          //this.filteredGamesList = response.data.filter(game => 2000 === game.away_id)
          Array.prototype.push.apply(
            this.filteredGamesList,
            this.gameList.filter(
              (game) =>
                this.teamId == game.away_id || this.teamId == game.home_id
            )
          );
        });
    });
  },
};
</script>
