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
        <v-card :min-height="minimunHeight" :color="aviso.cor">
          <v-card-title :class="fontSizeTitulo">
            {{ aviso.titulo }}
            <v-spacer></v-spacer>
            <v-icon v-if="isBigEnough">
              {{ aviso.icone }}
            </v-icon>
          </v-card-title>
          <v-card-text :class="fontSizeConteudo">
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
    minimunHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 160;
        case "md":
          return 200;
        case "lg":
          return 250;
        case "xl":
          return 400;
      }
    },
    fontSizeTitulo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "text-subtitulo-2";
        case "sm":
          return "text-subtitulo-1";
        case "md":
          return "text-subtitulo-1";
        case "lg":
          return "text-h6";
        case "xl":
          return "text-h4";
      }
    },
    fontSizeConteudo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "text-caption";
        case "sm":
          return "text-body-2";
        case "md":
          return "text-body-1";
        case "lg":
          return "text-body-1";
        case "xl":
          return "text-h4";
      }
    },
    isBigEnough() {
      if (this.$vuetify.breakpoint.name == "xs") return false;
      else return true;
    },
  },
};
</script>

<style scoped></style>
