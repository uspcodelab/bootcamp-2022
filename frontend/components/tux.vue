<template>
  <v-row justify="center" justify-md="end">
    <v-col cols="6" md="8">
      <v-img
        class="tux"
        alt="Tux"
        :src="require('@/assets/imgs/Tux.svg')"
        min-width="100"
        contain
      >
      </v-img>
    </v-col>
  </v-row>
</template>

<style>
.tux {
  color: rgba(5, 22, 30, 1);
  padding-top: 40px;
}
</style>
