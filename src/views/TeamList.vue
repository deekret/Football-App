<template>
  <h1>Team List</h1>
  <div>
    <input type="text" v-model="search" placeholder="Search..." />
  </div>
  <div class="wrapper">
    <div
      class="card"
      v-for="team in filteredTeams"
      :key="team.id"
      @click.right:="showDetails(team)"
    >
      <a :style="team.color"> {{ team.searchName }} </a>
      <a v-if="team.showdetails">
        <small v-if="team.abbreviation">
          Abbr: {{ team.abbreviation }} <br
        /></small>
        <small v-if="team.division">{{ team.division }} <br /></small>
        <b
          ><button @click="showGames(team.id, team.searchName)">
            SHOW GAMES
          </button></b
        >
      </a>
    </div>
  </div>

  <pagination
    v-if="list"
    :gameListSize="filteredTeamsLength"
    v-on:page:update="updatePage"
    :currentPage="currentPage"
    :pageSize="pageSize"
  ></pagination>
</template>

<script>
import Pagination from "../components/Pagination";
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
  computed: {
    filteredTeams: function() {
      if (this.list) {
        return this.list
          .filter((team) => {
            team.showDetails = false;
            team.searchName = team.school + " " + team.mascot;
            return team.searchName
              .toLowerCase()
              .match(this.search.toLowerCase());
          })
          .slice(
            this.currentPage * this.pageSize,
            this.currentPage * this.pageSize + this.pageSize
          );
      } else {
        return [];
      }
    },
    filteredTeamsLength: function() {
      return this.list.filter((team) => {
        return team.school.match(this.search);
      }).length;
    },
  },
  data() {
    return {
      showdetails: false,
      currentPage: 0,
      pageSize: 25,
      filteredTeamsList: [],
      visibleTeams: [],
      search: "",
    };
  },
  methods: {
    showDetails(team) {
      for (var index in this.filteredTeams) {
        this.filteredTeams[index].showDetails = false;
      }
      team.showdetails = !team.showdetails;
    },
    showGames(id, name) {
      this.$router.push({
        name: "games",
        params: { teamId: id, teamName: name },
      });
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.visibleTeams = this.updateVisibleTeams();
    },
    updateVisibleTeams() {
      if (this.list) {
        return this.list.slice(
          this.currentPage * this.pageSize,
          this.currentPage * this.pageSize + this.pageSize
        );
      } else return [];
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
#app h1 {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button:hover,
#app button:active {
  background-color: #af0098;
  border-color: #8f007c;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
.wrapper {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  max-width: 6000px;
  min-height: 600px;
  flex-wrap: wrap;
  padding-top: 12px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 200px;
  margin: 12px;
  transition: 0.15s all ease-in-out;
}
.card:hover {
  transform: scale(1.1);
}
a {
  text-decoration: none;
  padding: 12px;
  font-size: 24px;
  flex-direction: column;
}
</style>
