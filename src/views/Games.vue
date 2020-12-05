<template>
  <router-link to="/">back</router-link>
  <div class="games">
    <h1>TEAM : {{ this.teamName }}</h1>
    <div v-if="filteredGamesList.length == 0">No games available</div>
  </div>

  <h2>Coming games:</h2>
  <div v-if="futureGames.length == 0">No games available</div>
  <div v-if="futureGames.length != 0">
    <h2>Coming games:</h2>
    <table class="center">
      <tr>
        <th>Home Team</th>
        <th>Away Team</th>
        <th>Date</th>
        <th>Venue</th>
      </tr>

      <tr v-for="game in futureGames" :key="game.id">
        <td>{{ game.home_team }}</td>
        <td>{{ game.away_team }}</td>
        <td>{{ game.start_date.toLovalDateString() }}</td>
        <td>{{ game.venue }}</td>
      </tr>
    </table>
  </div>
  <h2>Past games:</h2>
  <div v-if="pastGames.length == 0">No games available</div>
  <div v-if="filteredGamesList.length != 0">
    <table class="center">
      <tr>
        <th>Home Team</th>
        <th>Away Team</th>
        <th>Date</th>
        <th>Time</th>
        <th>Venue</th>
        <th>Home Score</th>
        <th>Away Score</th>
      </tr>
      <tr v-for="game in pastGames" :key="game.id">
        <td>{{ game.home_team }}</td>
        <td>{{ game.away_team }}</td>
        <td>{{ game.start_date.split("T")[0] }}</td>
        <td>
          {{ game.start_date.split("T")[1].substring(0, 5) }}
        </td>
        <td>{{ game.venue }}</td>
        <td>{{ game.home_points }}</td>
        <td>{{ game.away_points }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["year", "teamId", "teamName"],

  data() {
    return {
      gameList: undefined,
      filteredGamesList: [],
      years: [2018, 2019, 2020],
      currentDate: new Date(),
      previousDate: new Date("2000-08-26T00:00:00.000Z"),
    };
  },
  computed: {
    pastGames() {
      let filtered = [];
      if (this.filteredGamesList.length != 0) {
        for (var i = 0; i < this.filteredGamesList.length; i++) {
          var date = new Date(this.filteredGamesList[i].start_date);
          //alert(date);
          if (date < this.currentDate) filtered.push(this.filteredGamesList[i]);
        }
      }
      return filtered;
    },
    futureGames() {
      let filtered = [];
      if (this.filteredGamesList.length != 0) {
        for (var i = 0; i < this.filteredGamesList.length; i++) {
          var date = new Date(this.filteredGamesList[i].start_date);
          //alert(date);
          if (date > this.currentDate) filtered.push(this.filteredGamesList[i]);
        }
      }
      return filtered;
    },
  },
  watch: {},
  methods: {
    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
    splitByDate() {
      alert(this.filteredGamesList.length[0]);
      this.filteredGamesList.forEach(function(game, index) {
        alert(index);
        const gameDate = new Date(game.start_date);
        console.log(gameDate, index);
      });
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
