<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="icon mr-4" color="#05161E">
        mdi-comment-text-multiple</v-icon
      >
      <h1>Noticias</h1>
    </div>
    <v-row class="py-3">
      <v-col v-for="news in News.slice(0, 3)" :key="news.title" cols="4">
        <v-card color="#dae3f0" class="black--text">
          <v-card-title class="text-h6 text-ubuntu">{{
            news.title
          }}</v-card-title>
          <v-card-subtitle
            ><span style="color: #797979" class="text-ubuntu">{{
              news.subtitle
            }}</span></v-card-subtitle
          >
          <v-card-actions class="mt-5">
            <v-btn :to="news.link" color="black" outlined> Ver mais </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    News: [],
  }),
  methods: {
    async getNews () {
      let res = await this.$axios.get(this.$global.baseUrlApi + "/news/")
      let news = res.data.data;
      for (let i = 0; i < news.length; i++) {
        let new_news= {
          title: news[i].title,
          subtitle: news[i].subtitle,
          link: '/noticias/' + news[i].id
        }
        this.News.push(new_news);
      }
    }
  },
  created() {
    this.getNews()
  }
};
</script>

<style scoped>
.text-ubuntu {
  font-family: "Ubuntu" !important;
}
</style>
