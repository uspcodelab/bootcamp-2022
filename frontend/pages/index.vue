<template>
  <v-col>
    <v-row cols="12" sm="8" md="6">
      <Header />
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="6">
          <Avisos />
        </v-col>
        <v-col cols="6">
          <Status />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Blog />
        </v-col>
      </v-row>
    </v-container>
    <v-row cols="12" sm="8" md="6">
      <FAQ />
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
