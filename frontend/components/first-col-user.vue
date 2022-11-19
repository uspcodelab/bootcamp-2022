<template>
  <v-card light flat class="d-flex flex-column justify-space-between mb-10">
    <div class="title">
      <v-icon> mdi-cog </v-icon>
      <span> <b> Detalhes e configurações </b> </span>
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-account-box </v-icon>
      <span class="topic"> <b> Login </b> </span> <br />
      <div class="content">
        {{ username }}
      </div>
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-lock-outline </v-icon>
      <span class="topic"> <b> Senha </b> </span>
      <change-password />
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-at </v-icon>
      <span class="topic"> <b> E-mails de contato </b> </span>
      <add-email />
      <div v-for="(email, index) of emails" class="content">
        {{ email }} <v-icon small> mdi-close </v-icon>
        <!-- fazer componente para remover e-mail -->
        <br />
      </div>
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-code-tags </v-icon>
      <span class="topic"> <b> Shell </b> </span>
      <div class="content" style="margin-top: 6px">
        <span
          style="
            background-color: rgba(0, 0, 0, 0.1);
            padding: 4px 7px;
            border-radius: 3px;
          "
        >
          <i> /bin/bash </i>
        </span>
      </div>
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-account-group </v-icon>
      <span class="topic"> <b> Grupo </b> </span>
      <div class="content">
        <span> {{ group }} </span>
      </div>
    </div>

    <div class="content mb-6">
      <v-icon size="20"> mdi-earth </v-icon>
      <span class="topic">
        <b> Website </b>
      </span>
      <div class="content">
        <a :href="website"> {{ website }} </a>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: "Undefined",
    },
    emails: {
      type: Array,
      default: "Undefined",
    },
    group: {
      type: String,
      default: "Undefinded",
    },
  },
  computed: {
    website() {
      return "https://linux.ime.usp.br/" + this.username;
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/user.scss";
</style>
