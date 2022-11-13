<template>
  <v-card 
    class="d-flex flex-column justify-space-between" 
    align-center 
    flat 
    color="gray" 
    light
    min-height="500"
  >
      <h2> Sua conta de usuário </h2>
      <p style="font-size: 20px; margin: -15px 0 -15px 0; padding: 0"> Detalhes da conta </p>
      <div>
        <h3> Login </h3>
        <span> {{ username }}</span>
      </div> 
      <div class="d-flex flex-column"> 
        <h3> E-mails de contato </h3>
        <span v-for="email of emails"> {{ email }} </span>
      </div>
      <div>      
        <h3> Shell </h3>
        <span> /bin/bash </span>
      </div>
      <div>
        <h3> Grupo </h3>
        <span> {{ group }} </span>
      </div>
      <div>
        <h3> Website </h3>
        <span> https://linux.ime.usp.br/{{username}} </span>
      </div>

  </v-card>
</template>
<script>
  export default {
    props: {
      username: String,
      emails: Array,
      group: String,
    }
  }
</script>
<style scoped>
  h3 {
    margin-bottom: 6px;
  }
</style>
