<template>
  <v-expansion-panels accordion flat>
    <v-expansion-panel
      class="py-1 rounded-lg black--text question"
      active-class="active"
    >
      <v-expansion-panel-header v-slot="{ open }" expand-icon="">
        <v-layout justify-space-between align-center>
          {{ question }}
          <v-icon v-if="!open" color="black">mdi-chevron-down</v-icon>
          <v-icon v-else color="white">mdi-chevron-up</v-icon>
        </v-layout>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="rounded-lg rounded-t-0">
        {{ answer }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String,
  }
};
</script>

<style scoped>
.v-expansion-panel-content {
  white-space: pre-line;
  color: #797979;
  background-color: #f2f2f2;
}
.v-expansion-panel {
  margin: 8px;
  padding: 0;
}
.question {
  background-color: #dae3f0 !important;
  color: black !important;
}
.active {
  background-color: #212121 !important;
  color: white !important;
}
</style>
