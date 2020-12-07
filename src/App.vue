<template>
  <div id="nav"></div>
  <router-view :list="teamList" />
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      teamList: undefined,
    };
  },
  methods: {},
  mounted() {
    axios.get("https://api.collegefootballdata.com/teams").then((response) => {
      this.teamList = response.data;
      console.warn(response.data);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
