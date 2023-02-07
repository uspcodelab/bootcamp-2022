<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="mr-4" color="#05161E"> mdi-comment-alert</v-icon>
      <h1>Avisos</h1>
    </div>
    <v-row class="my-1 flex-column flex-md-row">
      <v-col
        v-for="warning in Warnings.slice(0, 4)"
        :key="warning.title"
        cols="12"
        md="6"
      >
        <v-card :min-height="minimumHeight" :color="warning.color">
          <v-card-title
            class="text-subtitle-1 text-sm-subtitle-2 text-md-h6 text-ubuntu"
          >
            {{ warning.title}}
            <v-spacer></v-spacer>
            <v-icon v-if="isBigEnough">
              {{ warning.icon }}
            </v-icon>
          </v-card-title>
          <v-card-text
            class="text-caption text-sm-body-2 text-md-body-1 text-ubuntu"
          >
            {{ warning.content}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    Warnings: [],
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
    async getWarning() {
      let res = await this.$axios.get(this.$global.baseUrlApi + "/warning")
      let warning_api = res.data.data;
      for (let i = 0; i < warning_api.length; i++) {
        let new_warning = {
          title: warning_api[i].title,
          icon: warning_api[i].icon,
          content: warning_api[i].content,
          color: warning_api[i].color,
        }
          this.Warnings.push(new_warning);
      }
    }
  },
  created() {
    this.getWarning();
  },
};
</script>

<style scoped>
.text-ubuntu {
  font-family: "Ubuntu" !important;
}
</style>
