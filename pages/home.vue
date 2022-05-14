<template>
  <div>
    <div class="category">
      <v-row class="justify-center my-3">
        <v-btn-toggle group color="main">
          <v-btn
            value="comic"
            class="text-capitalize title--text font-weight-bold"
            depressed
            @click="getComic()"
            >Komik
          </v-btn>
          <v-btn
            value="novel"
            class="text-capitalize title--text font-weight-bold"
            depressed
            >Novel
          </v-btn>
          <v-btn
            value="business"
            class="text-capitalize title--text font-weight-bold"
            depressed
            >Bisnis
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-row class="mb-0">
        <v-btn-toggle group mandatory dense color="main">
          <v-btn class="text-capitalize title--text font-weight-bold" depressed>
            Buku
          </v-btn>
          <v-btn class="text-capitalize title--text font-weight-bold" depressed>
            Penulis
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-divider></v-divider>
    </div>
    <v-row class="mt-2">
      <v-col
        v-for="book in getHomeBook"
        :key="book.book_id"
        lg="2"
        md="2"
        sm="4"
        xs="6"
      >
        <v-card
          width="300"
          height="400"
          hover
          @click="() => redirect(book.slug)"
        >
          <v-img :src="book.image" width="200" height="250" class="mx-auto">
          </v-img>
          <v-card-subtitle
            class="text-caption main--text text-left text-capitalize py-1"
          >
            {{ book.author }}
          </v-card-subtitle>
          <v-card-title
            class="subtitle-2 text-capitalize font-weight-bold title--text text-left mt-1 py-1"
          >
            {{ book.title }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
  name: 'HomePage',
  setup() {},
  computed: {
    getHomeBook() {
      return this.$store.state.book.listHomeBook
    },
  },
  mounted() {
    this.fetchHomeBook()
  },
  methods: {
    fetchHomeBook() {
      this.$store.dispatch('book/fetchHomeBook')
    },
    redirect(title) {
      return this.$router.push(`/products/${title}`)
    },
    async getComic() {
      await this.$apollo.query({
        query: gql`
          query getComic($category: String) {
            book(where: { detail: { category: { _eq: $category } } }) {
              author
              image
              slug
              title
            }
          }
        `,
        variables: { category: 'comic' },
      })
    },
  },
}
</script>
