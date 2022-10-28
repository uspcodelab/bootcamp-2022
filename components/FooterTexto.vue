<template>
  <div class="FooterDiv">
    <span v-if="linha1 != ''" v-html="linha1"> </span>
    <span v-if="linha2 != ''" v-html="linha2" id="nome"> </span>
    <span v-if="linha3 != ''" v-html="linha3"> </span>
  </div>
</template>
<script>
export default {
  props: {
    linha1: {
      type: String,
      default: "",
    },
    linha2: {
      type: String,
      default: "",
    },
    linha3: {
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
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

#nome > * {
  margin: 100px;
}
</style>
