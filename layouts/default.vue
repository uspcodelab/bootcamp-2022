<template>
  <v-app dark>
    <v-app-bar color="#05161E" fixed app>
      <TabsMenu />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer cols="12" id="Footer" color="#05161E">
      <div id="FooterDiv">
        <Footer />
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
#Footer {
  display: flex;
  padding: 0;
  min-height: 13%;
}
#FooterDiv {
  display: flex;
  width: 100%;
}
</style>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",

      heightFooter() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return 50;
          case "sm":
            return 100;
          case "md":
            return 3000;
          case "lg":
            return 600;
          case "xl":
            return 600;
        }
      },
    };
  },

  methods: {
    printar_tamanho() {
      console.log(this.$vuetify.breakpoint.name);
    },
  },
};
</script>
