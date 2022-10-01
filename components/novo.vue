<template>
  <v-card
    class="elevation-16 mx-auto"
    width="600"
  >
    <v-card-title class="text-h5">
        Expresse o seu amor pelo meu site
    </v-card-title>
    <v-card-text>
     Para cada estrela a menos, 10 meses de azar

      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="red"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn text>
        Tao bom que nem quero colocar
      </v-btn>
      <v-btn
        color="primary"
        text
      >
        Mt foda
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      rating: 4.5,
    }),
  }
</script>
