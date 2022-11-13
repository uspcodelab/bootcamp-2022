<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon @click="dialog = true">
        <v-icon> {{ icon }} </v-icon>
      </v-btn>
    </template>

    <v-card color="#DAE3F0" light>
      <!-- card que envolve tudo -->

      <v-form
        ref="form"
        v-model="valid"
        class="d-flex flex-column align-center"
      >
        <v-card-title class="text-h5 lighten-2">
          <b> {{ title }} </b>
        </v-card-title>

        <slot> </slot>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            depressed
            color="#30167C"
            dark
            @click="dialog = false"
          >
            Confirma
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      dialog: false,
    };
  },

  props: {
    title: String,
    icon: String,
  },
};
</script>
