<template>
  <v-app dark>
    <v-app-bar color="#05161E" flat app absolute>
      <v-container>
        <v-row align="center">
          <v-col cols="8">
            <v-app-bar color="#05161E" flat>
              <TabsMenu />
            </v-app-bar>
          </v-col>
          <v-col cols="4">
            <div class="d-flex flex-row align-center justify-end">
              <NuxtLink to="login" class="userText">
                <span class="mx-4">Criar conta</span>|<span class="mx-4">
                  Entrar
                </span>
                <v-icon size="28">mdi-account-circle</v-icon>
              </NuxtLink>
            </div>
          </v-col>
        </v-row>
      </v-container>
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
    <v-footer cols="12" color="#05161E">
      <Footer />
    </v-footer>
  </v-app>
</template>

<style scoped>
.userText {
  text-decoration: none;
  color: #fff;
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
        {
          icon: "mdi-calendar-month",
          title: "Atendimento",
          to: "/atendimento",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
