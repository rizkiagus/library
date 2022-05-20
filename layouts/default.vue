<template>
  <v-app>
    <v-app-bar fixed app dense color="#00afb9" class="rounded-t-lg">
      <v-toolbar-title
        class="h1 font-weight-bold white--text"
        style="cursor: pointer"
        @click="$router.push('/')"
        v-text="title"
      />
      <v-spacer />
      <v-toolbar flat width="150" class="rounded-l-lg d-block" height="27">
        <v-text-field
          v-model="search"
          clearable
          flat
          hide-details
          placeholder="Cari buku favorite anda disini"
          background-color="white"
          height="27"
          @keypress.enter="findBook()"
        >
        </v-text-field>
      </v-toolbar>
      <v-btn
        tile
        small
        depressed
        color="#0081A7"
        class="rounded-r-lg white--text"
        type="submit"
        @click="findBook()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn color="#0081A7" small depressed to="/login">
        <span class="white--text text-capitalize"> Masuk </span>
      </v-btn>
    </v-app-bar>
    <v-main class="mx-6 mb-6">
      <v-row>
        <v-col sm="0" md="0" lg="2" xl="4"></v-col>
        <v-col sm="12" md="12" lg="8" xl="4">
          <Nuxt />
        </v-col>
        <v-col sm="0" md="0" lg="2" xl="4"></v-col>
      </v-row>
    </v-main>
    <v-footer app color="main" min-height="300" absolute>
      <v-row>
        <v-col sm="0" md="0" lg="2" xl="4"></v-col>
        <v-col sm="12" md="12" lg="8" xl="4">
          <v-row class="white--text">
            <v-col md="3" sm="12" class="pb-0">
              <h1>Library</h1>
              <div class="caption">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus voluptas, accusamus exercitationem architecto nam ad
                ipsam nobis asperiores dolores iste molestias delectus
                dignissimos ut, deserunt animi.
              </div>
            </v-col>
            <v-col sm="12" md="3" class="pb-0">
              <h3>Konteks 1</h3>
              <div class="pt-2">
                <p class="caption pointer">Konteks 1</p>
              </div>
            </v-col>
            <v-col sm="12" md="3" class="pb-0">
              <h3>Tentang Library</h3>
              <div class="pt-2">
                <p class="caption pointer">Tentang Kami</p>
              </div>
            </v-col>
            <v-col sm="12" md="3" class="pb-0">
              <h3>Lainnya</h3>
              <div class="pt-2">
                <p class="caption pointer">Syarat & Ketentuan</p>
                <p class="caption pointer">Kebijakan & Privasi</p>
                <p class="caption pointer">Bantuan</p>
                <p class="caption pointer">Hubungi Kami</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="0" md="0" lg="2" xl="4"></v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Library',
      search: '',
      searchResult: null,
    }
  },
  computed: {},
  methods: {
    findBook() {
      this.$store.dispatch('book/getListFromSearch', this.search)
      if (this.search === '') {
        this.$router.push('/home/latestbook')
      } else {
        this.$router.push('/home')
      }
    },
  },
}
</script>
<style>
.pointer {
  cursor: pointer;
}
.pointer:hover {
  color: #0081a7;
}
</style>
