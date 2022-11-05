<template>
  <v-row no-gutters class="container-blue">
    <v-col cols="12">
      <v-container>
        <div class="d-flex flex-row my-10 align-center">
          <v-icon color="#05161E" size="28">{{ icon }}</v-icon>
          <h1 class="ml-5">{{ title }}</h1>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Ubuntu";
}
.container-blue {
  background-color: #dae3f0;
  color: #05161e;
}
</style>
