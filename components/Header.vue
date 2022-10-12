<template>
  <v-row cols="12" style="background-color: #dae3f0">
    <v-container>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in Main" :key="i">
          <v-row class="carrossel" justify="left">
            <v-container class="texto">
              <div>
                <p id="sub">{{ Pitico[i] }}</p>

                <p id="big">{{ slide }}</p>
                <p id="infolink">{{ ref[i] }}</p>
              </div>
              <div>
                <Tux />
              </div>
            </v-container>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      Main: ["Rede GNU-Linux IME-USP", "Crie a sua conta"],
      Pitico: ["Bem vindo à", "Conta"],
      ref: ["Mais informações", "Clique aqui para criar sua conta"],
    };
  },
};
</script>

<style scoped>
.texto {
  display: flex;
  color: rgba(5, 22, 30, 1);
  font-size: 5rem;
  font-family: "Ubuntu";
  font-weight: bolder;
  column-count: 2;
  column-gap: 100px;
  margin: 25px;
}
#sub {
  font-size: 2rem;
  margin-top: 25px;
  font-weight: normal;
}
#big {
  line-height: 0.9;
}
#infolink {
  font-size: 2rem;
  font-weight: normal;
}
</style>
