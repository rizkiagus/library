<template>
  <div>
    <div class="category">
      <v-row class="justify-center my-3">
        <v-btn-toggle group color="main">
          <v-btn
            value="comic"
            class="text-capitalize title--text font-weight-bold"
            depressed
            @click="fetchComicBook()"
            >Komik
          </v-btn>
          <v-btn
            value="novel"
            class="text-capitalize title--text font-weight-bold"
            depressed
            @click="fetchNovelBook()"
            >Novel
          </v-btn>
          <v-btn
            value="business"
            class="text-capitalize title--text font-weight-bold"
            depressed
            @click="fetchBusinessBook()"
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
    <!-- search -->
    <div v-if="resultFindBook">
      <div v-if="resultFindBook.length">
        <!-- Home Comic -->
        <v-row v-if="isComic" class="mt-2">
          <v-col
            v-for="comic in getBookByCategory"
            :key="comic.book_id"
            lg="2"
            md="2"
            sm="4"
          >
            <v-card
              width="300"
              height="400"
              hover
              @click="() => redirect(comic.slug)"
            >
              <v-img
                :src="comic.image"
                width="200"
                height="250"
                class="mx-auto"
              >
              </v-img>
              <v-card-subtitle
                class="text-caption main--text text-left text-capitalize py-1"
              >
                {{ comic.author }}
              </v-card-subtitle>
              <v-card-title
                class="subtitle-2 text-capitalize font-weight-bold title--text text-left mt-1 py-1"
              >
                {{ comic.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- Home Novel -->
        <v-row v-else-if="isNovel" class="mt-2">
          <v-col
            v-for="comic in getBookByCategory"
            :key="comic.book_id"
            lg="2"
            md="2"
            sm="2"
          >
            <v-card
              :width="
                $vuetify.breakpoint.xs
                  ? '50px'
                  : $vuetify.breakpoint.sm
                  ? '100px'
                  : $vuetify.breakpoint.md
                  ? '200px'
                  : 1000
              "
              :height="
                $vuetify.breakpoint.xs
                  ? '50px'
                  : $vuetify.breakpoint.sm
                  ? '100px'
                  : $vuetify.breakpoint.md
                  ? '200px'
                  : 1000
              "
              hover
              @click="() => redirect(comic.slug)"
            >
              <v-img
                :src="comic.image"
                :width="
                  $vuetify.breakpoint.xs
                    ? '50px'
                    : $vuetify.breakpoint.sm
                    ? '100px'
                    : $vuetify.breakpoint.md
                    ? '200px'
                    : 1000
                "
                :height="
                  $vuetify.breakpoint.xs
                    ? '50px'
                    : $vuetify.breakpoint.sm
                    ? '100px'
                    : $vuetify.breakpoint.md
                    ? '200px'
                    : 1000
                "
                class="mx-auto"
              >
              </v-img>
              <v-card-subtitle
                class="text-caption main--text text-left text-capitalize py-1"
              >
                {{ comic.author }}
              </v-card-subtitle>
              <v-card-title
                class="subtitle-2 text-capitalize font-weight-bold title--text text-left mt-1 py-1"
              >
                {{ comic.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- Home Business -->
        <v-row v-else-if="isBusiness" class="mt-2">
          <v-col
            v-for="comic in getBookByCategory"
            :key="comic.book_id"
            lg="2"
            md="2"
            sm="4"
          >
            <v-card
              width="300"
              height="400"
              hover
              @click="() => redirect(comic.slug)"
            >
              <v-img
                :src="comic.image"
                width="200"
                height="250"
                class="mx-auto"
              >
              </v-img>
              <v-card-subtitle
                class="text-caption main--text text-left text-capitalize py-1"
              >
                {{ comic.author }}
              </v-card-subtitle>
              <v-card-title
                class="subtitle-2 text-capitalize font-weight-bold title--text text-left mt-1 py-1"
              >
                {{ comic.title }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- Home ALL -->
        <p>Hasil pencarian anda:</p>
        <v-row class="mt-2">
          <v-col
            v-for="book in resultFindBook"
            :key="book.book_id"
            lg="2"
            md="2"
            sm="2"
            xs="2"
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
      <p v-else>Buku tidak ditemukan :(</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  setup() {},
  data() {
    return {
      isComic: false,
      isNovel: false,
      isBusiness: false,
    }
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 220
        case 'sm':
          return 400
        case 'md':
          return 500
      }
      return 200
    },
    getHomeBook() {
      return this.$store.state.book.listHomeBook
    },
    getBookByCategory() {
      return this.$store.state.book.getByCategory
    },
    resultFindBook() {
      return this.$store.state.book.listBySearch
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
    fetchComicBook() {
      this.$store.dispatch('book/fetchBookByCategory', 'comic')
      if (this.isComic === false) {
        this.isComic = true
      } else if (this.isComic === true) {
        this.isComic = false
      }
    },
    fetchNovelBook() {
      this.$store.dispatch('book/fetchBookByCategory', 'novel')
      if (this.isNovel === false) {
        this.isNovel = true
      } else if (this.isNovel === true) {
        this.isNovel = false
      }
    },
    fetchBusinessBook() {
      this.$store.dispatch('book/fetchBookByCategory', 'business')
      if (this.isBusiness === false) {
        this.isBusiness = true
      } else if (this.isBusiness === true) {
        this.isBusiness = false
      }
    },
  },
}
</script>
