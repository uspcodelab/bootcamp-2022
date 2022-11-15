<template>
  <v-col>
    <Header-padrao icon="mdi-account-circle" :text="username" />
    <v-container>
      <p style="font-size: 22px; margin: 20px 0 20px 0"> Olá, {{ username }}! </p>
      <v-row>
        <v-col>
          <first-col-user
            :username="username"
            :emails="emails"
            :group="group"
          />
        </v-col>
        <v-col>
          <second-col-user 
            :institute="institute"
            :degree="degree"
            :SSH="SSH"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-col>
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
};
</script>
