<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    align-center
    flat
    color="gray"
    light
    min-height="500"
  >
    <h2>Sua conta de usuário</h2>
    <p style="font-size: 20px; margin: -15px 0 -15px 0; padding: 0">
      Detalhes da conta
    </p>
    <div>
      <v-icon> mdi-account-box </v-icon>
      <span class="title"> Login </span> <br />
      <span> {{ username }}</span>
    </div>
    <div>
      <v-icon> mdi-lock-outline </v-icon>
      <span class="title"> <b> Senha </b> </span>
      <change-password />
    </div>
    <div>
      <v-icon> mdi-at </v-icon>
      <span class="title"> <b> E-mails de contato </b> </span> <br />
      <span v-for="email of emails"> {{ email }} </span>
      <br />
      <add-email />
    </div>
    <div>
      <v-icon> mdi-code-tags </v-icon>
      <span class="title"> <b> Shell </b> </span> <br />
      <span> /bin/bash </span>
    </div>
    <div>
      <v-icon> mdi-account-group </v-icon>
      <span class="title"> <b> Grupo </b> </span> <br />
      <span> {{ group }} </span>
    </div>
    <div>
      <v-icon> mdi-earth </v-icon>
      <span class="title"> <b> Website </b> </span> <br />
      <span> https://linux.ime.usp.br/{{ username }} </span>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    username: String,
    emails: Array,
    group: String,
  },
};
</script>
<style scoped>
h3 {
  margin-bottom: 6px;
}
</style>
