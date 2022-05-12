<template>
  <div></div>
</template>
<script>
export default {
  setup() {},
  computed: {
    bookTitle() {
      return this.$route.params.bookname
    },
  },
  mounted() {
    this.$store.dispatch('book/fetchBookByTitle', this.bookTitle)
  },
}
</script>
