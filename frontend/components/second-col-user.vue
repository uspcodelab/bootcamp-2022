<template>
  <v-card class="d-flex flex-column" align-center flat color="gray" light>
      <h2> Sua conta de usuário </h2>
      <p style="font-size: 20px; margin: 10px"> Detalhes da conta </p>
      <div>
        <h3> Login </h3>
        <span> username </span>
      </div> 
      <div> 
        <h3> Email de contato </h3>
        <span> username </span>
      </div>
      <div>      
        <h3> Shell </h3>
        <span> username </span>
      </div>
      <div>
        <h3> Grupo </h3>
        <span> username </span>
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
      group: String,
      email: String,
    }
  }
</script>

<style scoped>
  div {
    margin-top: 20px;
  }
</style>
