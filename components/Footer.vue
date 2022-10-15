<template>
  <v-container id="FooterContainer">
    <v-col class="FooterCol" xs="12" sm="12" md="4" lg="4" xl="4" col="12">
      <div class="DivFooter-0">
        <p class="TextFooter">In memorian</p>
        <p class="TextFooter">Rogério Theodoro Brito</p>
        <p class="TextFooter">Sem o qual esta rede não estaria aqui.</p>
      </div>
    </v-col>

    <v-col class="FooterCol" xs="12" sm="12" md="4" lg="4" xl="4" col="12">
      <div class="DivFooter-0">
        <p class="TextFooter">
          Endereço: Rua do Matão, 1010, Bloco A, Sala 125 -
        </p>
        <p class="TextFooter">Cidade Universitária SP</p>
      </div>
    </v-col>
    <v-col class="FooterCol" xs="12" sm="12" md="12" lg="4" xl="4" col="12">
      <div class="DivFooter-1">
        <div class="DivFooter-2">
          <div class="DivFooter-3">
            <img id="Telefone" alt="Icone Telefone" src="/telefone.png" />
            <p class="TextFooter" style="margin: 10px">
              Telefone: {{ telefone }}
            </p>
          </div>
          <div class="DivFooter-3">
            <img id="Envelope" alt="Icone Envelope" src="/envelope.png" />
            <p class="TextFooter">Email: {{ email }}</p>
          </div>
        </div>
        <ImeLogo />
      </div>
    </v-col>
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
#FooterContainer {
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  justify-content: center;
  padding: 0;
}

.FooterCol {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}

.DivFooter-0 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}

.DivFooter-1 {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.DivFooter-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.DivFooter-3 {
  display: flex;
  flex-direction: row;
}

.TextFooter {
  margin: 0px;
}

#Telefone {
  margin: 15px -4px 0 0;
  height: 15px;
}

#Envelope {
  margin: 5px 8px 0 0;
  height: 14px;
}
</style>
