<template>
  <v-card
    class="d-flex flex-column justify-space-between"
    flat
    color="gray"
    light
    min-height=500
  >

      <div class="title">
        <span> <b> Detalhes e configurações </b> </span>
      </div>

      <div class="content">
        <v-icon> mdi-account-box </v-icon>
        <span class="topic"> <b> Login </b> </span> <br/>
        <span> {{ username }}</span>
      </div> 


      <div class="content">
        <v-icon> mdi-lock-outline </v-icon>
        <span class="topic"> <b>  Senha </b> </span>
        <change-password />
      </div>

      <div class="content" >
        <v-icon> mdi-at </v-icon> 
        <span class="topic"> <b> E-mails de contato </b> </span> 
        <span v-for="(email, index) of emails"> <br/> 
          {{ email }} <!-- fazer componente para remover e-mail -->
        </span> 
        <br/>
        <add-email style="padding: 10px !important;"/> 
      </div>

      <div class="content">
        <v-icon> mdi-code-tags </v-icon>
        <span class="topic"> <b> Shell </b> </span> 
        <br/>
        <span class="code "style=""> <i> /bin/bash </i> </span>
      </div>

      <div class="content">
        <v-icon> mdi-account-group </v-icon>
        <span class="topic"> <b> Grupo </b> </span> 
        <br/>
        <span> {{ group }} </span>
      </div>

      <div class="content">
        <v-icon > mdi-earth </v-icon>
        <span class="topic">  
          <b> Website </b>
        </span> 
        <br/>
        <span> https://linux.ime.usp.br/{{ username }} </span> 
      </div>

  </v-card>
</template>

<script>

export default {
  props: {
    username: {
      type: String,
      default: "Undefined",
    },
    emails: {
      type: Array,
      default: "Undefined"
    },
    group: {
      type: String,
      default: "Undefinded"
    },
  },
};
</script>

<style scoped>

@import '@/assets/css/user.css';
.code { 
  background-color: rgba(0,0,0,0.1); 
  padding: 4px 7px; 
  border-radius: 3px;
  
}

</style>
