<template>
  <div>
    <v-row>
      <v-col sm="12" md="4" lg="4" xl="4" class="mt-12 pt-12">
        <p class="text-h4 text-capitalize title--text mb-0">daftar</p>
        <div>
          <v-text-field label="Username" outlined dense class="wth my-0">
          </v-text-field>
          <v-text-field label="Nama Lengkap" outlined dense class="wth my-0">
          </v-text-field>
          <v-text-field
            type="password"
            label="Password"
            outlined
            dense
            class="wth my-0"
          >
          </v-text-field>
        </div>
        <v-btn
          color="title"
          block
          class="subtitle-1 font-weight-bold text-capitalize white--text mb-2"
        >
          daftar
        </v-btn>
        <p class="text-center caption text-capitalize main--text">
          Sudah memiliki akun?
          <span
            class="text-decoration-underline"
            style="cursor: pointer"
            @click="$router.push('/login')"
          >
            Login
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
  name: 'RegisterPage',
  setup() {},
}
</script>
<style></style>
