<template>
  <div>
    <h1>Avisos</h1>
    <v-row class="my-1 flex-column flex-md-row">
      <v-col
        v-for="aviso in avisos.slice(0, 4)"
        :key="aviso.titulo"
        cols="12"
        md="6"
      >
        <v-card :min-height="minimumHeight" :color="aviso.cor">
          <v-card-title class="text-subtitle-1 text-sm-subtitle-2 text-md-h6 text-ubuntu">
            {{ aviso.titulo }}
            <v-spacer></v-spacer>
            <v-icon v-if="isBigEnough">
              {{ aviso.icone }}
            </v-icon>
          </v-card-title>
          <v-card-text class="text-caption text-sm-body-2 text-md-body-1 text-ubuntu">
            {{ aviso.conteudo }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    avisos: [
      {
        titulo: "Impressora",
        conteudo: "Impressora não está funcionando no momento.",
        cor: "orange",
        icone: "mdi-alien",
      },
      {
        titulo: "Feriado",
        conteudo:
          "Rede ficará indisponível durante o feriado para a realização de manutenção.",
        cor: "blue",
        icone: "mdi-robot-excited",
      },
      {
        titulo: "Teste",
        conteudo: "Testando aqui",
        cor: "red",
        icone: "mdi-linkedin",
      },
      {
        titulo: "",
        conteudo: "",
        cor: "green",
        icone: "",
      },
      {
        titulo: "",
        conteudo: "",
        cor: "yellow",
        icone: "mdi-nintendo-wii",
      },
    ],
  }),
  computed: {
    minimumHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 160;
        default:
          return 200;
      }
    },
    isBigEnough() {
      return this.$vuetify.breakpoint.name != "xs";
    },
  },
};
</script>

<style scoped>
.text-ubuntu {
  font-family: 'Ubuntu' !important;
}
</style>
