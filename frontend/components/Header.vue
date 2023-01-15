<template>
  <v-row no-gutters style="background-color: #dae3f0">
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="8"
          align-self="center"
          class="order-last order-md-first"
        >
          <v-carousel
            cycle
            interval="6000"
            height="400"
            hide-delimiter-background
            :show-arrows="false"
            class="pl-2 text-center text-md-left"
          >
            <v-carousel-item v-for="slide in slides" :key="slide.mainText">
              <v-container class="texto">
                <h2 class="sub">{{ slide.smallIntro }}</h2>
                <h1 class="text-h3 big text-md-h2">{{ slide.mainText }}</h1>
                <v-btn
                  v-for="button in slide.buttons"
                  :key="button.text"
                  v-if="!button.external"
                  :to="button.link"
                  :color="button.color"
                  class="infolink"
                  outlined
                >
                  {{ button.text }}
                </v-btn>
                <v-btn
                  v-for="button in slide.buttons"
                  :key="button.text"
                  v-if="button.external"
                  :href="button.link"
                  :color="button.color"
                  class="infolink"
                  outlined
                >
                  {{ button.text }}
                </v-btn>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="4">
          <Tux />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        smallIntro: "Bem vindo(a) à",
        mainText: "Rede GNU-Linux IME-USP",
        buttons: [
          {
            text: "Mais informações",
            external: false,
            link: "/inspire",
            color: "rgba(5, 22, 30, 1)",
          },
          {
            text: "Logue-se",
            external: false,
            link: "/login",
            color: "rgba(0, 0, 0, 1)",
          },
        ],
      },
      {
        smallIntro: "Conta",
        mainText: "Crie a sua conta",
        buttons: [
          {
            text: "Clique aqui",
            external: true,
            link: "https://linux.ime.usp.br",
            color: "rgba(5, 22, 30, 1)",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.texto {
  color: rgba(5, 22, 30, 1);
  font-family: "Ubuntu" !important;
  padding: 30px 0px;
}
h1 {
  padding-top: 10px;
  padding-bottom: 50px;
}
.sub {
  font-weight: normal;
}
.big {
  line-height: 0.9;
  font-family: "Ubuntu" !important;
  font-weight: bolder !important;
}
.infolink {
  font-size: 1rem;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
