<template>
  <v-row style="background-color: #dae3f0">
    <v-container>
      <v-row>
        <v-col cols="8" align-self="center" align="left">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item v-for="slide in slides" :key="slide">
              <v-container class="texto">
                <h3 class="sub">{{ slide.smallIntro }}</h3>
                <h1 class="big">{{ slide.mainText }}</h1>
                <template v-for="button in slide.buttons">
                  <v-btn
                    :key="button"
                    v-if="!button.external"
                    :to="button.link"
                    :color="button.color"
                    class="infolink"
                    outlined
                  >
                    {{ button.text }}
                  </v-btn>
                  <v-btn
                    :key="button"
                    v-else
                    :href="button.link"
                    :color="button.color"
                    class="infolink"
                    outlined
                  >
                    {{ button.text }}
                  </v-btn>
                </template>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="4" align-self="center" align="right"><Tux /></v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
.texto {
  color: rgba(5, 22, 30, 1);
  font-family: "Ubuntu";
  font-weight: bolder;
  padding: 30px 0px;
}
h1 {
  font-size: 5rem;
  padding-top: 10px;
  padding-bottom: 50px;
}
.sub {
  font-size: 2rem;
  font-weight: normal;
}
.big {
  line-height: 0.9;
}
.infolink {
  font-size: 1rem;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
