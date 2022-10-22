<template>
 <div>
    <div class="StatusHeader" style="margin: 5% 0 2.8% 0;">
      <h2 style="display: inline-block">Status</h2>
      <!-- Os icones do status invisiveis pq
        o fundo normal esta da mesma cor que eles -->
      <v-icon size=2.5em class="icon">mdi-format-list-bulleted-square</v-icon>
      <v-icon size=1.9em class="icon"> mdi-server</v-icon>
    </div>
    <v-list class="MaqStats"
      v-for="maquina in Maquinas">
      <v-list-item
      :class="{ verde: maquina.status,
      vermelho: !maquina.status}"> 
        
        <v-list-item-title>  
        {{maquina.name}}
        </v-list-item-title>  
             
        <v-list-item-icon>
          <v-icon class="icon" v-if="maquina.status">
            mdi-check-bold
          </v-icon>
          <v-icon class="icon" v-else="!maquina.status">
            mdi-close-thick
          </v-icon>
        </v-list-item-icon>
        
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Maquinas: [
        { name: "LOL",
          status: false
        },
        { name: "Dota",
          status: true
        },
        { name: "Máquina 3",
          status: false
        },
        { name: "Máquina 4",
          status: true
        },
        { name: "Máquina 5",
          status: true
        }]
    }
  }
}
</script>

<style scoped>
.StatusHeader{
  display: flex;
  align-items: center;
}
.StatusHeader>*{
  margin-right: 2%;
}
.MaqStats{
  
  background-color: rgba(0,0,0,0);
  padding: 0;
}
.MaqStats>*{
display: flex;
justify-content: space-between;

width: 100%;
padding: 1.2% 4%;
border-radius: 0.4rem;
margin: 0 0 2% 0;
color: #05161E !important; 
}
.icon{
  color:#05161E;
}
.verde{
  background-color: #B6E388;
}
.vermelho{
background-color: #F4AA90;

}
</style>
