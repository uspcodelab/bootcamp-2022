<template>
  <v-card class="d-flex flex-column" align-center flat color="gray" light>
    <v-card
      class="d-flex flex-column justify-space-between"
      min-height="130px"
      flat
    >
      <h2>
        <v-icon color="black">mdi-information-outline</v-icon>
         Suas Informações</h2>
      <div>
       
        <p style="margin-bottom:0;">  <v-icon color="black"> mdi-home-city </v-icon> Instituto de matemática e Estatística <change-institute /> </p>
        
      </div>
      <div>
        
        <p> <v-icon color="black"> mdi-link-variant </v-icon> {{ degree }} <change-status /> </p>
        
      </div>
    </v-card>
    <v-card
      class="d-flex flex-column justify-space-between mt-16"
      min-height="110px"
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
        <p style="margin-bottom:0; margin-top:0;"> <b> Acesso Remoto: </b> </p>
        <v-checkbox label="Habilitar acesso via SSH" class="mt-0" style="font-weight: bold;" />
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
