<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="4">
        <div class="d-flex flex-column align-center">
          <p><i>In memorian:</i></p>
          <span><b>Rogério Theodoro Brito</b></span>
          <span>Sem o qual esta rede não estaria aqui.</span>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="d-flex flex-column align-center">
          <span>
            Endereço: Rua do Matão, 1010, Bloco A, Sala 125
          </span>
          <span>Cidade Universitária - USP, São Paulo/SP</span>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="d-flex flex-row align-center DivFooter-1">
          <div class="d-flex flex-column align-center">
            <div class="d-flex flex-row align-center">
              <v-icon class="mx-2" id="Telefone" color="white">mdi-phone</v-icon>
              <span>
                Telefone: {{ telefone }}
              </span>
            </div>
            <div class="d-flex flex-row align-center">
              <v-icon class="mx-2" id="Envelope" color="white">mdi-email</v-icon>
              <span>Email: {{ email }}</span>
            </div>
          </div>
          <ImeLogo />
        </div>
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
.DivFooter-1 {
  justify-content: space-evenly;
}

#Telefone {
  text-shadow: 2px 2px 6px black;
}

#Envelope {
  text-shadow: 2px 2px 6px black;
}
</style>
