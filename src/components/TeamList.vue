<template>
  <h1>Team List</h1>
  <div>
    <table class="center">
      <tr class="clickable-row">
        <th>School</th>
        <th>Color</th>
        <th>Division</th>
        <th>Mascot</th>
      </tr>

      <tr v-for="team in list" :key="team.id">
        <td>{{ team.school }}</td>
        <td :style="{ color: team.color }">{{ team.color }}</td>
        <td>{{ team.division }}</td>
        <td>{{ team.mascot }}</td>
        <button @click="showGames(team.id)">SHOW GAMES</button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TeamList",
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      showdetails: false,
    };
  },
  methods: {
    showGames(id) {
      this.$router.push({ name: "games", params: { year: 2000, teamId: id } });
    },
  },
};
</script>
