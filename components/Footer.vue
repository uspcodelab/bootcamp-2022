<template>
  <v-container>
    <v-row align-center>
      <v-col cols="12" md="4">
        <FooterTexto
          linha1="<p><i>In memorian:</i></p>"
          linha2="<h4><b> Rogério Theodoro Brito </b></h4>"
          linha3="Sem o qual esta rede nao estaria aqui."
        />
      </v-col>

      <v-col cols="12" md="4">
        <FooterTexto
          linha1="Cidade Universitária - USP, São Paulo/SP"
          linha2="Rua do Matão, 1010, Bloco A, Sala 125."
        />
      </v-col>

      <v-col cols="12" md="4">
        <FooterTextoImagem :telefone="telefone" :email="email" />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      telefone: "(11) 3091-6482",
      email: "admin@linux.ime.usp.br",
    };
  },
};
</script>

<style scoped>

@media screen and (max-width: 960px) {
  #FooterContainer > * {
    padding: min(15px, 4%) 0;
  }
}
</style>
