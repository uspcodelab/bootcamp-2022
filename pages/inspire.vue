<template>
  <v-row>
    <v-col class="text-center">
      <img src="/ednaldo.jpg" alt="Vuetify.js" class="mb-5" />
        <ednaldo />
        <outro />
      <blockquote class="blockquote">
        &#8220; Não existe site feio; só existe site que nao conhece os produtos vue &#8221;
        <footer>
          <small>
            <em>&mdash; Minha Cabeça </em>
          </small>
        </footer>
      </blockquote>
    </v-col>

    <NuxtLink to="/fun"> teste </NuxtLink>
  </v-row>

</template>

<script>
export default {
  name: "InspirePage",
};
</script>
