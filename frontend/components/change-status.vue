<template>
  <open-card title="Mudar graduação" icon="mdi-pencil">
    <span> Selecione seu grau: </span>
    <v-select
      label="Grau"
      :rules="[(v) => !!v]"
      :items="degree"
      style="width: 300px"
      required
    />
  </open-card>
</template>

<script>
export default {
  data() {
    return {
      degree: [
        "Aluno de graduação",
        "Aluno de mestrado",
        "Aluno de doutorado",
        "Aluno de pós-graduação",
        "Outro",
      ],
    };
  },
};
</script>
