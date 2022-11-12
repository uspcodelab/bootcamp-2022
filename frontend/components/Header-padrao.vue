<template>
  <v-row style="background-color: #DAE3F0">
    <v-container class="d-flex">
      <v-icon color="black" size="30"> {{icon}} </v-icon>
      <h1> {{text}} </h1>    
    </v-container>
  </v-row>
</template>
<script>
export default {
  props: {
    icon: String,
    text: String, 
  }
}
</script>
