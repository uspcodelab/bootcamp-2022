<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="4">
        <FooterTexto>
          <template v-slot:left>
            <p><i>In memorian:</i></p>
            <h4><b> Rogério Theodoro Brito</b></h4>
            Sem o qual esta rede nao estaria aqui.
          </template>
        </FooterTexto>
      </v-col>

      <v-col cols="12" md="4">
        <FooterTexto>
          <template v-slot:left>
            Cidade Universitária - USP, São Paulo/SP
            Rua do Matão, 1010, Bloco A, Sala 125.
          </template>
        </FooterTexto>
      </v-col>

      <v-col cols="12" md="4">
        <FooterTexto>
          <template v-slot:left>
            <div>
              <v-icon class="px-3">mdi-phone</v-icon>
              <span>Telefone: {{ telefone }}</span>
            </div>
            <div>
              <v-icon class="px-3">mdi-email-outline</v-icon>
              <span>Email: {{ email }}</span>
            </div>
          </template>
          <template v-slot:right>
            <ImeLogo />
          </template>
        </FooterTexto>
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
