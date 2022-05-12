<template>
  <div>
    <v-row>
      <v-col sm="12" md="4" lg="4" xl="4" class="mt-12 pt-12">
        <p class="text-h4 text-capitalize title--text mb-0">masuk</p>
        <p class="caption main--text mt-0">
          <span class="text-capitalize">selamat datang kembali!</span>
          Silahkan masuk menggunakan akun anda
        </p>
        <div>
          <v-text-field label="Username" outlined dense class="wth my-0">
          </v-text-field>
          <v-text-field label="Password" outlined dense class="wth my-0">
          </v-text-field>
        </div>
        <p
          class="text-center caption text-capitalize main--text text-decoration-underline"
          style="cursor: pointer"
        >
          lupa password?
        </p>
        <v-btn
          color="title"
          block
          class="subtitle-1 font-weight-bold text-capitalize white--text mb-2"
        >
          masuk
        </v-btn>
        <p class="text-center caption text-capitalize main--text">
          Belum memiliki akun?
          <span
            class="text-decoration-underline"
            style="cursor: pointer"
            @click="$router.push('/register')"
          >
            Daftar
          </span>
        </p>
      </v-col>
      <v-col sm="12" md="8" lg="8" xl="8">
        <v-img
          class="imga justify-center"
          width="800"
          src="https://ik.imagekit.io/dgzn8o9mn/miniproject/8576_r3Vs2Vt2m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652324041774"
        >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  setup() {},
}
</script>
<style>
.wth {
  width: 400px;
}
.imga {
  margin-top: -40px;
}
</style>
