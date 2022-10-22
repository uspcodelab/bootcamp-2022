<template>
  <div>
    <div class="StatusHeader" style="margin: 5% 0 3.8% 0;">
      <h2 style="display: inline-block">Status</h2>
      <!-- Os icones do status têm o fundo branco pq,
        por agora, o fundo normal esta preto. -->
      <img class="image" style="background-color: white" src="../static/taskMark.svg"/>
      <img class="image" style="background-color: white" src="../static/serverMark.svg"/>
    <div></div>
    </div>
    <v-list class="MaqStats"
      v-for="(Num) in 5">
      <v-list-item
        :class="{ verde: Maquinas[Num-1], vermelho: !Maquinas[Num-1]}"> 
        Máquina {{Num}} 
      </v-list-item>
      
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Maquinas: [1,0,1,1,0]
    }
  }
}
</script>

<style scoped>
.StatusHeader{
  display: flex;
  align-items: center;
}
.image{
  margin: 0 0 0 2%;
  height: 2em;
}
.MaqStats{
  background-color: rgba(0,0,0,0);
  padding: 0;
}
.MaqStats>*{
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1em;

width: 80%;
padding: 1.2% 0 1.2% 4%;
border-radius: 0.4rem;
margin: 0 0 2% 0;
color: #05161E !important; 
}
.verde{
background-color: #B6E388;
}
.verde::after{
  background-image: url(/checkMark.svg);
  background-size: 25px;
  transform: translateY(26%);
  display: flex;
  width: 30px;
  align-self: center;
  margin-right: 3%;

}
.vermelho{
background-color: #F4AA90;

}
.vermelho::after{
  background-image: url(static/xMark.svg);
  background-size: 25px;
  transform: translateY(26%);
  display: flex;
  width: 30px;
  align-self: center;
  margin-right: 3%;
}
</style>
