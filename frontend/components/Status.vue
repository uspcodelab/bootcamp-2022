<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="icon mr-4">mdi-server-network</v-icon>
      <h1>Status</h1>
    </div>
    <div class="mt-4">
      <v-list class="MaqStats" v-for="maquina in Maquinas" :key="maquina.name">
        <v-list-item
          :class="{ verde: maquina.status, vermelho: !maquina.status }"
        >
          <v-list-item-title>
            {{ maquina.name }}
          </v-list-item-title>

          <v-list-item-icon>
            <v-icon class="icon" v-if="maquina.status"> mdi-check-bold </v-icon>
            <v-icon class="icon" v-else="!maquina.status">
              mdi-close-thick
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Maquinas: [
      { name: "LOL", status: false },
      { name: "Dota", status: true },
      { name: "Máquina 3", status: false },
      { name: "Máquina 4", status: true },
      { name: "Máquina 5", status: true },
    ],
  }),
};
</script>

<style scoped>
.MaqStats {
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
}
.MaqStats > * {
  width: 100%;
  padding: 1.2% 4%;
  border-radius: 0.4rem;
  margin: 0 0 2% 0;
  color: #05161e !important;
}
.icon {
  color: #05161e;
}
.verde {
  background-color: #b6e388;
}
.vermelho {
  background-color: #f4aa90;
}
</style>
