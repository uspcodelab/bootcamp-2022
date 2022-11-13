<template>
  <v-card class="d-flex flex-column" align-center flat color="gray" light>
    <v-card
      class="d-flex flex-column justify-space-between"
      min-height="130px"
      flat
    >
      <h2>Suas Informações</h2>
      <div>
        <v-icon color="black"> mdi-home-city </v-icon>
        <span> {{ institute }} </span>
        <change-institute />
      </div>
      <div>
        <v-icon color="black"> mdi-link-variant </v-icon>
        <span> {{ degree }} </span>
        <change-status />
      </div>
    </v-card>
    <v-card
      class="d-flex flex-column justify-space-between mt-16"
      min-height="140px"
      flat
    >
      <h2>Serviços</h2>
      <div>
        <span> <b> Acesso Remoto: </b> </span>
        <v-checkbox 
          label="Habilitar acesso via SSH" 
          v-model="SSH"
          class="mt-0"
        />
      </div>
    </v-card>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      hide: false,
      rules: {
        min: (v) => v.length >= 8 || "No mínimo 8 caracteres",
      },
    };
  },
  props: {
    institute: String,
    degree: String,
    SSH: Boolean,
  },
};
</script>
<style scoped>
.password {
  background-color: red;
  padding-top: -20px;
}
</style>
