<template>
  <div>
    <div class="d-flex align-center">
      <v-icon size="30" class="icon mr-4">mdi-server-network</v-icon>
      <h1>Status</h1>
    </div>
    <div class="mt-4">
      <v-list class="MaqStats" v-for="machine in Machines" :key="machine.name">
        <v-list-item
          :class="{ verde: machine.status, vermelho: !machine.status }"
        >
          <v-list-item-title>
            {{ machine.name }}
          </v-list-item-title>

          <v-list-item-icon>
            <v-icon class="icon" v-if="machine.status"> mdi-check-bold </v-icon>
            <v-icon class="icon" v-else="!machine.status">
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
    Machines: [],
  }),
  methods: {
    async getMachines() {
      let res = await this.$axios.get(this.$global.baseUrlApi + "/machine")
      let machine_api = res.data.data;
      for (let i = 0; i < machine_api.length; i++) {
        let new_machine = {
          name: machine_api[i].name,
          status: machine_api[i].status,
        }
        this.Machines.push(new_machine);
      }
    }
  },
  created () {
    this.getMachines()
  }
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
