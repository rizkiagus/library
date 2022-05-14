<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-card width="200" height="250">
          <v-img :src="getDetail[0].image" width="150" class="mx-auto"></v-img>
        </v-card>
      </v-col>
      <v-col cols="10">
        <div class="header">
          <p class="main--text text-capitalize caption">
            {{ getDetail[0].author }}
          </p>
          <p class="main--text text-capitalize text-h5">
            {{ getDetail[0].title }}
          </p>
        </div>
        <div class="deskripsi">
          <p class="title--text caption font-weight-bold mb-0">
            Deskripsi Buku
          </p>
          <p class="main--text mt-0 py-0 text-body-2">
            {{ getDetail[0].detail.description }}
          </p>
        </div>
        <div class="detailbook">
          <p class="text-capitalize title--text caption font-weight-bold mb-0">
            detail buku
          </p>
          <v-row>
            <v-col cols="6">
              <span class="caption main--text text-capitalize d-block">
                jumlah halaman
              </span>
              <span class="caption main--text text-capitalize d-block">
                {{ getDetail[0].detail.page_count }}
              </span>
              <span class="caption main--text text-capitalize d-block mt-3">
                tanggal terbit
              </span>
              <span class="caption main--text text-capitalize d-block">
                {{
                  $moment(getDetail[0].detail.release_date).format(
                    'DD MMM YYYY'
                  )
                }}
              </span>
            </v-col>
            <v-col cols="6">
              <span class="caption main--text text-capitalize d-block">
                Penerbit
              </span>
              <span class="caption main--text text-capitalize d-block">
                {{ getDetail[0].detail.publisher }}
              </span>
              <span class="caption main--text text-capitalize d-block mt-3">
                Bahasa
              </span>
              <span class="caption main--text text-capitalize d-block">
                {{ getDetail[0].detail.language }}
              </span>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  setup() {},
  computed: {
    bookTitle() {
      return this.$route.params.bookname
    },
    getDetail() {
      return this.$store.state.book.bookDetail
    },
  },
  mounted() {
    this.$store.dispatch('book/fetchBookByTitle', this.bookTitle)
  },
}
</script>
