<template>
  <v-card class="d-flex flex-column" align-center flat color="gray" light>
    <v-card 
      class="d-flex flex-column justify-space-between" 
      min-height="130px"
      flat
     >
      <h2> Suas Informações </h2>
      <div>
        <v-icon color="black"> mdi-home-city </v-icon>
        <span> Instituto de matemática e Estatística </span>
      </div>
      <div>
        <v-icon color="black"> mdi-link-variant </v-icon>
        <span> Aluno de graduação </span>
      </div>
    </v-card>
    <v-card 
      class="d-flex flex-column justify-space-between mt-16" 
      min-height="220px"
      flat
    >
      <h2> Serviços </h2>
      <div>
        <span> <b> Acesso Remoto: </b> </span>
        <v-checkbox 
          label="Habilitar acesso via SSH"
          class="mt-0"
        />
      </div>
      <div>
        <span> <b> Alterar senha: </b> </span>
        <change-password style="margin-left:-20px"/>
      </div>
    </v-card>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        hide: false,
        rules: {
          min: v => v.length >= 8 || 'No mínimo 8 caracteres',
        }
      }
    }
  }
</script>
<style scoped>
  .password {
    background-color: red;
    padding-top: -20px;
  }
</style>


