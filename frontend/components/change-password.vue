<template>
  <open-card title="Alterar senha" icon="mdi-cog">
    <span> Por favor, insira a senha atual: </span>
    <v-text-field
      :append-icon="hide[0] ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.min]"
      :type="hide[0] ? 'text' : 'password'"
      v-model="passwords.old"
      hint="A senha deve possuir ao menos 8 caracteres"
      value=""
      class="input-group--focused mt-2"
      style="width: 300px"
      @click:append="hide[0] = !hide[0]"
      required
    />

    <span> Insira a nova senha: </span>
    <v-text-field
      :append-icon="hide[1] ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.min]"
      :type="hide[1] ? 'text' : 'password'"
      v-model="passwords.new1"
      hint="Senha deve possuir ao menos 8 caracteres"
      value=""
      class="input-group--focused mt-2"
      style="width: 300px"
      @click:append="hide[1] = !hide[1]"
      required
    />
    <span> Confirme a senha: </span>
    <v-text-field
      :append-icon="hide[2] ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.min, rules.semelhantes]"
      :type="hide[2] ? 'text' : 'password'"
      v-model="passwords.new2"
      hint="Senha deve possuir ao menos 8 caracteres"
      value=""
      class="input-group--focused mt-2"
      style="width: 300px"
      @click:append="hide[2] = !hide[2]"
      required
    />
  </open-card>
</template>

<script>
export default {
  data() {
    return {
      passwords: {
        old: "",
        new1: "",
        new2: "",
      },
      hide: {
        0: true,
        1: true,
        2: true,
      },
      rules: {
        min: (v) => v.length >= 8 || "No mínimo 8 caracteres",
        semelhantes: (v) =>
          v == this.passwords.new1 || "As senhas não são semelhantes!",
      },
    };
  },
};
</script>
