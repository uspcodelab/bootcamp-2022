<template>
  <v-col>
    <v-row cols="12">
      <Header />
    </v-row>
    <v-container>
      <v-row class="mt-8">
        <v-col cols="12" md="6">
          <Avisos />
        </v-col>
        <v-col cols="12" md="6">
          <Status />
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <v-col cols="12">
          <Blog />
        </v-col>
      </v-row>
    </v-container>
    <v-row class="mt-8">
      <v-col cols="12">
        <FAQ />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
