<template>
  <div>
    <h1>Avisos</h1>
    <v-container>
      <v-row 
        v-for="(itemRow, indexRow) in 2"
      >
        <v-col 
          v-for="(itemCol, indexCol) in 2"
        >
          <v-card 
            :min-height="minimunHeight"
            :min-width="minimunWidth"
            :color="avisos[2 * indexRow + indexCol].color"
          >
            <v-card-title
              :class="fontSizeTitle"
            >
              {{ avisos[2 * indexRow + indexCol].title }}
              <v-spacer></v-spacer>
              <v-icon v-if="isBigEnough">
                {{ avisos[2 * indexRow + indexCol].icon }}
              </v-icon>
            </v-card-title>
            <v-card-text
              :class="fontSizeContent"
            >
              {{ avisos[2 * indexRow + indexCol].content }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    avisos: [
      {
        title: "Impressora",
        content: "Impressora não está funcionando no momento.",
        color: "orange",
        icon: "mdi-alien",
      },
      {
        title: "Feriado",
        content:
          "Rede ficará indisponível durante o feriado para a realização de manutenção.",
        color: "blue",
        icon: "mdi-robot-excited",
      },
      {
        title: "",
        content: "",
        color: "green",
        icon: "",
      },
      {
        title: "",
        content: "",
        color: "yellow",
        icon: "mdi-nintendo-wii",
      },
    ],
  }),
  computed: {
      minimunHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 100;
          case 'sm': return 150;
          case 'md': return 200;
          case 'lg': return 250;
          case 'xl': return 400;
        }
      },
      minimunWidth (){
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 100;
          case 'sm': return 150;
          case 'md': return 200;
          case 'lg': return 250;
          case 'xl': return 400;
        }
      },
      isBigEnough () {
        if(this.$vuetify.breakpoint.name == 'xs') return false;
        else return true;
      },
      fontSizeTitle() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "text-subtitle-2";
          case 'sm': return "text-subtitle-1";
          case 'md': return "text-subtitle-1";
          case 'lg': return "text-h4";
          case 'xl': return "text-h6";
        }
      },
      fontSizeContent() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "text-caption";
          case 'sm': return "text-body-2";
          case 'md': return "text-body-1";
          case 'lg': return "text-h6";
          case 'xl': return "text-h4";
        }
      }
    },
};
</script>

<style scoped></style>
