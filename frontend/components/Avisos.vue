<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="mr-4" color="#05161E"> mdi-comment-alert</v-icon>
      <h1>Avisos</h1>
    </div>
    <v-row class="my-1 flex-column flex-md-row">
      <v-col
        v-for="aviso in avisos.slice(0, 4)"
        :key="aviso.titulo"
        cols="12"
        md="6"
      >
        <v-card :min-height="minimumHeight" :color="aviso.cor">
          <v-card-title
            class="text-subtitle-1 text-sm-subtitle-2 text-md-h6 text-ubuntu"
          >
            {{ aviso.titulo }}
            <v-spacer></v-spacer>
            <v-icon v-if="isBigEnough">
              {{ aviso.icone }}
            </v-icon>
          </v-card-title>
          <v-card-text
            class="text-caption text-sm-body-2 text-md-body-1 text-ubuntu"
          >
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
    avisos: [],
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
  methods: {
    async getAvisos() {
      let res = await this.$axios.get(this.$global.baseUrlApi + "/warning")
      let avisos_api = res.data.data;
      for (let i = 0; i < avisos_api.length; i++) {
        let aviso_novo = {
          titulo: avisos_api[i].title,
          icone: avisos_api[i].icon,
          conteudo: avisos_api[i].content,
          cor: avisos_api[i].color,
        }
        this.avisos.push(aviso_novo);
      }
    }
  },
  created() {
    this.getAvisos();
  },
};
</script>

<style scoped>
.text-ubuntu {
  font-family: "Ubuntu" !important;
}
</style>
