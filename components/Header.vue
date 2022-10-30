<template>
  <v-row style="background-color: #dae3f0">
    <v-container>
      <v-row>
        <v-col cols="12" md="8" align-self="center" >
          <v-carousel
            cycle
            interval="10000"
            height="400"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item
              class="d-block mx-auto"
              v-for="slide in slides"
              :key="slide"
            >
              <v-container class="texto">
                <h3 class="sub">{{ slide.smallIntro }}</h3>
                <h1 class="big text-h3 text-h1-md ">{{ slide.mainText }}</h1>
                <template v-for="button in slide.buttons">
                  <v-btn
                    v-if="!button.external"
                    :to="button.link"
                    :color="button.color"
                    class="infolink"
                    flat
                    outlined
                  >
                    {{ button.text }}
                  </v-btn>
                  <v-btn
                    v-else
                    :href="button.link"
                    :color="button.color"
                    class="infolink"
                    flat
                    outlined
                  >
                    {{ button.text }}
                  </v-btn>
                </template>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col cols="4" align="center" >
          <Tux />
        </v-col>
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
  font-family: Ubuntu !important;
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
  font-family:Ubuntu !important;
}
.infolink {
  font-size: 1rem;
  margin-right: 10px;
  margin-top: 10px;
}


</style>
