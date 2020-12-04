<template>
<router-link to="/">back</router-link>
  <div class="about">
    <h1>This is an about page</h1>
    {{this.gameList.filter(x => x.home_id !== this.teamId)}}
  </div>
</template>

<script>
import axios from 'axios'
export default {

  props:  ['year', 'teamId'],

  data() {
    return {
      gameList: [],
      filteredGamesList: [],
      years: [2000]
    }
  },

  methods: {
    range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
  },
  mounted() {

    this.years.forEach(element => {
      axios.get('https://api.collegefootballdata.com/games?year='+ element + '&seasonType=regular')
      .then((response) => {
      this.gameList.push(response.data);
      })
    });
    this.filteredGamesList = this.gameList.filter(x => x.home_id !== this.teamId)
  },
  
}
</script>
