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

      <tr v-for="team in this.visibleTeams" :key="team.id">
        <td>{{ team.school }}</td>
        <td :style="{ color: team.color }">{{ team.color }}</td>
        <td>{{ team.division }}</td>
        <td>{{ team.mascot }}</td>
        <button @click="showGames(team.id, team.school)">SHOW GAMES</button>
      </tr>
    </table>

    <pagination
      v-if="list"
      :gameList="list"
      v-on:page:update="updatePage"
      :currentPage="currentPage"
      :pageSize="pageSize"
    ></pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination";
export default {
  name: "TeamList",
  components: {
    Pagination,
  },
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {
      showdetails: false,
      currentPage: 0,
      pageSize: 25,
      visibleTeams: [],
    };
  },
  created: function() {
    this.updateVisibleTeams();
  },
  watch: {
    list: function() {
      this.updateVisibleTeams();
    },
  },
  methods: {
    showGames(id, name) {
      this.$router.push({
        name: "games",
        params: { teamId: id, teamName: name },
      });
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTeams();
    },
    updateVisibleTeams() {
      if (this.list) {
        this.visibleTeams = this.list.slice(
          this.currentPage * this.pageSize,
          this.currentPage * this.pageSize + this.pageSize
        );
      }
    },
  },
};
</script>
