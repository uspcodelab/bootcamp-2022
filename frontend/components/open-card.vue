<template>
  <v-dialog 
    v-model="dialog" 
    width="500"
    persistent
    no-click-animation	
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        icon 
        @click="dialog = true"
        max-width="20px" 
      >
        <v-icon 
          :size="iconSize"
          color="#05161E"
        > 
          {{ icon }} 
        </v-icon>
      </v-btn>
    </template>

    <v-card color="#DAE3F0" 
      light
      class="d-flex flex-column align-center"
    >
      <!-- card que envolve tudo -->

        <v-btn
          icon
          absolute
          right
          @click="close()"
        >
          <v-icon> mdi-close </v-icon>
        </v-btn>

      <v-card-title class="text-h5 lighten-2">
        <b> {{ title }} </b>
      </v-card-title>

        <v-form
          ref="form"
          v-model="valid"
        >

          <slot> </slot>

          <v-card-actions>
            <v-spacer></v-spacer>
           <v-btn
              depressed
              color="#30167C"
              dark
              @click="validate()"
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
    iconSize: {
      type: String,
      default: "20px",
    },
  },
  methods: {
    validate () {
      if(this.$refs.form.validate()) {
        // mandar o post
        this.dialog = false;
        this.$refs.form.reset();
      }
    },
    close () {
      this.dialog = false;
      this.$refs.form.reset();
    }
  },
};
</script>
