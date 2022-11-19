<template>
  <v-tabs color="white" optional>
    <v-tab
      class="white--text px-6"
      v-for="page in pages"
      :key="page.name"
      :to="page.link"
      >{{ page.name }}</v-tab
    >
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    pages: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Inspire",
        link: "/inspire",
      },
      {
        name: "Sobre",
        link: "/sobre",
      },
    ],
  }),
};
</script>

<style scoped></style>
