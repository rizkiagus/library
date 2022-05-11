<template>
  <v-app>
    <v-app-bar fixed app dense color="#00afb9" class="rounded-t-lg">
      <v-toolbar-title class="h1 font-weight-bold white--text" v-text="title" />
      <v-spacer />
      <v-toolbar flat width="150" class="rounded-l-lg" height="27">
        <v-text-field
          clearable
          flat
          hide-details
          placeholder="Cari buku favorite anda disini"
          background-color="white"
          height="27"
        >
        </v-text-field>
      </v-toolbar>
      <v-btn
        tile
        small
        depressed
        color="#0081A7"
        class="rounded-r-lg white--text"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn color="#0081A7" small depressed>
        <span class="white--text text-capitalize">Masuk</span>
      </v-btn>
    </v-app-bar>
    <v-main class="mx-6 mb-6">
      <Nuxt />
    </v-main>
    <v-footer app color="main" height="200" absolute>
      <v-row class="white--text">
        <v-col cols="3" class="pb-0">
          <h1>Library</h1>
          <div class="caption">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            voluptas, accusamus exercitationem architecto nam ad ipsam nobis
            asperiores dolores iste molestias delectus dignissimos ut, deserunt
            animi.
          </div>
        </v-col>
        <v-col cols="3" class="pb-0">
          <h3>Konteks 1</h3>
          <div class="pt-2">
            <p class="caption pointer">Konteks 1</p>
          </div>
        </v-col>
        <v-col cols="3" class="pb-0">
          <h3>Tentang Library</h3>
          <div class="pt-2">
            <p class="caption">Tentang Kami</p>
          </div>
        </v-col>
        <v-col cols="3" class="pb-0">
          <h3>Lainnya</h3>
          <div class="pt-2">
            <p class="caption">Syarat & Ketentuan</p>
            <p class="caption">Kebijakan & Privasi</p>
            <p class="caption">Bantuan</p>
            <p class="caption">Hubungi Kami</p>
          </div>
        </v-col>
      </v-row>
    </v-footer>
    <!-- <v-footer :absolute="!fixed" app>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Library',
    }
  },
}
</script>
<style></style>
