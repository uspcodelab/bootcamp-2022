<template>
  <open-card title="Adicionar e-mail" icon="mdi-plus">
    <span> Insira o novo e-mail: </span>
    <v-text-field
      :rules="emailRules"
      :type="'text'"
      v-model="email"
      value=""
      class="input-group--focused mt-2"
      style="width: 300px"
      required
    />
  </open-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emailRules: [
        (e) => !!e || "Insira um e-mail",
        (e) => /.+@.+\..+/.test(e) || "O e-mail deve ser válido",
      ],
    };
  },
};
</script>
