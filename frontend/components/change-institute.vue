<template>
  <open-card title="Mudar Instituto" icon="mdi-cog">
    <span> Selecione o seu instituto: </span>
    <v-select
      label="Instituto"
      :rules="[(v) => !!v]"
      :items="institutes"
      style="width: 300px"
      required
    />
  </open-card>
</template>

<script>
export default {
  data() {
    return {
      institutes: ["IME", "FAU", "FEA", "IAG", "Outro"],
    };
  },
};
</script>
