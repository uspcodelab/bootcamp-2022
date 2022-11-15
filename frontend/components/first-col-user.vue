<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    align-center
    flat
    color="gray"
    light
    min-height="500"
  >
    <h2>Sua conta de usuário</h2>
    <h3 style="font-size: 20px; margin: -15px 0 -15px 0; padding: 10px 0; font-weight: normal;">
      Detalhes da conta
    </h3>
    <div>
      <v-icon> mdi-account-box </v-icon>
      <span class="title"> Login </span> 
      <p> {{ username }}</p>
    </div>
    <div>
      
      <span class="title"> <b> <v-icon> mdi-lock-outline </v-icon> Senha </b> </span>
      <change-password />
    </div>
    <div>
      
      <span class="title">  <b> <v-icon> mdi-at </v-icon> E-mails de contato </b> </span> 
      <span> 
        <p v-for="email of emails">{{ email }}</p> 
        <add-email  /> 
      </span>
      
      
    </div>
    <div>
      
      <span class="title"> <b> <v-icon> mdi-code-tags </v-icon> Shell </b> </span> 
      <p> /bin/bash </p>
    </div>
    <div>
      
      <span class="title"> <b> <v-icon> mdi-account-group </v-icon> Grupo </b> </span> 
      <p> {{ group }} </p>
    </div>
    <div>
     
      <span>  <b class="title">  <v-icon > mdi-earth </v-icon> Website </b>
        <p> https://linux.ime.usp.br/{{ username }} </p> 
      </span> 
      
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    username: String,
    emails: Array,
    group: String,
  },
};
</script>
<style scoped>
b {
  margin-bottom: 6px;
}

</style>
