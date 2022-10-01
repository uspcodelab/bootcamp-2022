<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          CURSO DE VUE GRATUITO
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
        Tem certeza que gostaria de vender a sua alma?
    </v-card-title>
    <v-card-text> </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Sim :)
          </v-btn>
          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
            SIM!!!!!!!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

