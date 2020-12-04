<template>
<div>
<h1>Team List</h1>
<table class="center">
    <tr>
      <td></td>
      <td> School </td>
      <td> Color </td>
      <td> Division </td>
      <td> Mascot </td>
    </tr>

    <tr
    v-for="team in list"
    :key="team.id">
      <td> <button>CLICK ME</button></td>
      <td>  {{team.school}} </td>
      <td :style="{color:team.color}">  {{team.color}}   </td>
      <td>  {{team.division}}   </td>
      <td>  {{team.mascot}}   </td>
    </tr>
</table>
</div>
</template>

<script>

export default {
  /* props: {
    id: {
      type: String,
      required: true,
    },
    abbreviation: {
      type: String,
      required: false,
    },
    alt_color: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    conference: {
      type: String,
      required: false,
    },
    division: {
        type: String,
        required: false,
    },
    logos: {
        type: Array[String],
        required: false,
    },
    mascot: {
        type: String,
        required: false,
    },
    school: {
        type: String,
        required: false,
    }
  }, */
  name: "TeamList",
  props: {
    list: {
      type: Array
    }
  },
  data() {
      return {
        teamList: undefined
      }
  },
  methods: {
  },
};
</script>
