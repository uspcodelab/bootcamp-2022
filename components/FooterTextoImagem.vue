<template>
  <div class="FooterDiv">
    <div class="FooterDivTextos">
      <div>
        <v-icon id="Telefone" dense> mdi-phone </v-icon>
        <span> Telefone: {{ telefone }} </span>
      </div>
      <div>
        <v-icon id="Envelope" dense> mdi-email-outline </v-icon>
        <span> Email: {{ email }} </span>
      </div>
    </div>
    <ImeLogo />
  </div>
</template>
<script>
export default {
  props: {
    telefone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.FooterDiv {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0px;
  text-align: center;
}

.FooterDivTextos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

#Telefone {
  margin: 0 2px 2px 0;
}

#Envelope {
  margin: 0 5px 1px 0;
}
</style>
