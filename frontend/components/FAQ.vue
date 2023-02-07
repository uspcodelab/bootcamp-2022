<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="icon mr-4" color="#05161E">
        mdi-frequently-asked-questions</v-icon
      >
      <h1>FAQ</h1>
    </div>
    <v-template v-for="item in Faqs" :key="item.question">
      <FAQCard :question="item.question" :answer="item.answer" />
    </v-template>
  </div>
</template>

<script>
export default {
  data: () => ({
    Faqs: [],
  }),
  methods: {
    async getFaqs () {
      let res = await this.$axios.get(this.$global.baseUrlApi + "/faq")
      let faq_api = res.data.data;
      for (let i = 0; i < faq_api.length; i++) {
        let new_faq = {
          question: faq_api[i].question,
          answer: faq_api[i].answer
        }
        this.Faqs.push(new_faq);
      }
    }
  },
  created () {
    this.getFaqs()
  }
};
</script>
