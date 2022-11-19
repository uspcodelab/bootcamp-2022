<template>
  <v-card 
    light 
    flat 
    class="d-flex flex-column"
  >
    <div class="mb-10">

      <div class="title"> 
        <v-icon> mdi-information-outline </v-icon>
        <span> <b> Suas Informações </b> </span> 
      </div>

      <div class="content">
        <v-icon> mdi-home-city </v-icon>
        <span class="ml-2"> Instituto de matemática e Estatística </span>
        <change-institute /> 
      </div>

      <div class="content mt-3">
        <v-icon> mdi-link-variant </v-icon> 
        <span class="ml-2"> {{ degree }} </span> 
        <change-status /> 
      </div>

    </div>

    <div>

      <div class="title"> 
        <v-icon color="black">mdi-cogs</v-icon>
        <span> <b> Serviços </b> </span>
      </div>

      <div class="content">
        <b> Acesso Remoto: </b> 
        <v-checkbox 
          v-model="SSH"
          label="Habilitar acesso via SSH" 
          class="mt-0"
          style="color: #05161E !important"
        />
      </div>

    </div>
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
      institute: { 
        type: String,
        default: "Undefined",
      },
      degree: {
        type: String,
        default: "Undefined",
      },
      SSH: { 
        type: Boolean,
        default: false,
      }
    },
  };

</script>

<style scoped>

@import '@/assets/css/user.scss';

</style>
