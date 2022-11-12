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
        <span> <b> Definir senha: </b> </span>
        <v-text-field
          :append-icon="hide ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.min]"
          :type="hide ? 'text' : 'password'"
          name="input-10-2"
          label="senha"
          hint="Senha deve possuir ao menos 8 caracteres"
          value=""
          color="rgba(0,0,0, 0.1)"
          class="input-group--focused pt-2"
          style="width: 300px"
          @click:append="hide = !hide"
        />
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
