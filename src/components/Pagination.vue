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
  props: ["gameListSize", "currentPage", "pageSize"],
  data() {
    return {
      totalPageNum: 0,
    };
  },
  //watch: {
  //  totalPageNum: function() {
  //    if (this.currentPage + 1 > Math.ceil(this.gameListSize / this.pageSize)) {
  //      this.updatePage(Math.ceil(this.gameListSize / this.pageSize) - 1);
  //    }
  //  },
  //},
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      if (this.gameListSize != 0) {
        if (
          this.currentPage + 1 >
          Math.ceil(this.gameListSize / this.pageSize)
        ) {
          this.updatePage(Math.ceil(this.gameListSize / this.pageSize) - 1);
        }
        this.totalPageNum = Math.ceil(this.gameListSize / this.pageSize);
        return Math.ceil(this.gameListSize / this.pageSize);
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
