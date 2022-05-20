<template>
  <div>
    <v-row class="mt-2">
      <v-col sm="12" md="4" lg="4" xl="4">
        <div>
          <p class="text-capitalize mb-0 mt-3 text-caption main--text">
            jelajahi buku favorit anda disini
          </p>
          <h1 class="text-uppercase pt-0 title--text">
            bawalah buku yang bagus untuk tidur bersamamu
          </h1>
          <p class="text-capitalize main--text mt-6">
            daftar sekarang, untuk menikmati layanan kami
          </p>
          <v-btn color="title" depressed to="/register">
            <span class="white--text body-1 font-weight-bold text-capitalize">
              daftar
            </span>
          </v-btn>
        </div>
      </v-col>
      <v-col md="8" sm="12" lg="8" xl="8">
        <v-img
          width="700"
          src="https://ik.imagekit.io/dgzn8o9mn/miniproject/43122_BQFUTgbIB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651582230342"
          alt="Book"
          class="img-landing"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="text-capitalize title--text my-2">buku-buku terbaru</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="text-right mt-6">
        <v-btn depressed plain retain-focus-on-click to="/home/latestbook">
          <h4 class="text-capitalize title--text">lihat semua</h4>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="px-2">
      <v-col v-if="$apollo.loading">Loading...</v-col>
      <v-col
        v-for="book in getBook"
        v-else
        :key="book.book_id"
        lg="2"
        md="2"
        sm="4"
        xs="12"
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
export default {
  name: 'IndexPage',
  computed: {
    getBook() {
      return this.$store.state.book.listBook
    },
  },
  mounted() {
    this.fetchBook()
  },
  methods: {
    fetchBook() {
      this.$store.dispatch('book/fetchBook')
    },
    redirect(title) {
      return this.$router.push(`/products/${title}`)
    },
  },
}
</script>
<style>
.img-landing {
  margin-top: -50px;
}
</style>
