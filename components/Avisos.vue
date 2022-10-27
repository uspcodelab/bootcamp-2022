<template>
  <div>
    <h1>Avisos</h1>
      <v-row class="my-1">
        <v-col v-for="aviso in avisos.slice(0, 4)" :key="aviso.titulo" cols="6">
          <v-card min-height="220px" :color="aviso.cor">
            <v-card-title>
              {{ aviso.titulo }}
              <v-spacer></v-spacer>
              <v-icon>
                {{ aviso.icone }}
              </v-icon>
            </v-card-title>
            <v-card-text>
              {{ aviso.conteudo }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    avisos: [
      {
        titulo: "Impressora",
        conteudo: "Impressora não está funcionando no momento.",
        cor: "orange",
        icone: "mdi-alien",
      },
      {
        titulo: "Feriado",
        conteudo:
          "Rede ficará indisponível durante o feriado para a realização de manutenção.",
        cor: "blue",
        icone: "mdi-robot-excited",
      },
      {
        titulo: "Teste",
        conteudo:
          "Testando aqui",
        cor: "red",
        icone: "mdi-linkedin",
      }, 
      {
        titulo: "",
        conteudo: "",
        cor: "green",
        icone: "",
      },
      {
        titulo: "",
        conteudo: "",
        cor: "yellow",
        icone: "mdi-nintendo-wii",
      },
    ],
  }),
};
</script>

<style scoped></style>
