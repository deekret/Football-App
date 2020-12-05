<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span
      v-if="showPreviousLink()"
      class="pagination-button"
      @click="updatePage(0)"
    >
      &lt;&lt;
    </span>
    <span
      v-if="showPreviousLink()"
      class="pagination-button"
      @click="updatePage(currentPage - 1)"
    >
      &lt;
    </span>

    {{ currentPage + 1 }} of {{ totalPages() }}

    <span
      v-if="showNextLink()"
      class="pagination-button"
      @click="updatePage(currentPage + 1)"
    >
      >
    </span>
    <span
      v-if="showNextLink()"
      class="pagination-button"
      @click="updatePage(totalPages() - 1)"
    >
      >>
    </span>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["gameList", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber) {
      //alert(pageNumber);
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      if (this.gameList) {
        return Math.ceil(this.gameList.length / this.pageSize);
      } else {
        return 0;
      }
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    },
  },
};
</script>

<style>
.pagination-button {
  cursor: pointer;
}
</style>
