<template>
  <v-col>
    <Header-padrao icon="mdi-account-circle" :text="username" />
    <v-container>
      <p style="font-size: 22px; margin-top: 25px"> Olá, {{ username }}! </p>
      <v-row>
        <v-col>
          <first-col-user />
        </v-col>
        <v-col>
          <second-col-user />
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>
<script>
export default {
  data () {
    return {
      username: "Pedrinho",
    }
  }
}
</script>
