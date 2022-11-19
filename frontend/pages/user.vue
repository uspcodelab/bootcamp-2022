<template>
  <v-main class="pt-0">
    <SecaoTitulo :title="title" icon="mdi-account-circle" />
    <v-container>
      <v-row class="mt-4">
        <v-col class="order-2 order-sm-1">
          <first-col-user
            :username="username"
            :emails="emails"
            :group="group"
          />
        </v-col>
        <v-col class="order-1 order-sm-2">
          <second-col-user :institute="institute" :degree="degree" :SSH="SSH" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      username: "Pedrinho",
      emails: ["pedrinho_gameplays@gmail.com", "pedro_bem_profissional@usp.br"],
      group: "bcc (20)",
      institute: "Instituto de Matemática e Estatítica",
      degree: "Aluno de graduação",
      SSH: true,
    };
  },
  computed: {
    title() {
      return "Página de usuário de " + this.username;
    },
  },
};
</script>
