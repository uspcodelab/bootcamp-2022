<template>
  <div class="d-flex flex-row justify-space-between">
    <div class="d-flex flex-column align-center text-center FooterDiv">
      <slot name="left"></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<style scoped>
.FooterDiv {
  flex: 1;
  justify-content: space-evenly;
}
</style>
