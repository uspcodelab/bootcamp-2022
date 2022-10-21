<template>
  <div>
    <h1>Avisos</h1>
    <v-container>
      <v-row v-for="(itemRow, indexRow) in 2">
        <v-col 
          v-for="(itemCol, indexCol) in 2"
          style="height: 250px;"
        >
          <v-card
            height="220px",
            :color="avisos[2*indexRow+indexCol].cor"
          >
            <v-card-title>
              {{avisos[2*indexRow+indexCol].titulo}}
              <v-spacer></v-spacer>
              <v-icon>
                {{avisos[2*indexRow+indexCol].icone}}
              </v-icon>
            </v-card-title>
            <v-card-text>
              {{avisos[2*indexRow+indexCol].conteudo}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
          icone: "mdi-alien"
        },
        {
          titulo: "Feriado",
          conteudo: "Rede ficará indisponível durante o feriado para a realização de manutenção.",
          cor: "blue",
          icone: "mdi-robot-excited"
        },
        {
          titulo: "",
          conteudo: "" ,
          cor: "green",
          icone: ""
        },
        {
          titulo: "",
          conteudo: "",
          cor: "yellow",
          icone: "mdi-nintendo-wii"
        }
      ]
    })
  }
</script>

<style scoped>
</style>
