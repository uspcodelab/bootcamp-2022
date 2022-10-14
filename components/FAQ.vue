<template>
  <v-container>
    <h1>FAQ</h1>
    <v-expansion-panels accordion flat>
      <v-expansion-panel v-for="(item, index) in faqContent" class="rounded-xl">
        <v-expansion-panel-header
          @click="togglePanels(index)"
          class="rounded-lg"
          :color="
            itemStatus[index]
              ? 'grey darken-4 white--text'
              : 'blue-grey lighten-4 black--text'
          "
        >
          {{ item.question }}
          <template v-slot:actions>
            <v-icon v-if="itemStatus[index]" color="white"> $expand </v-icon>
            <v-icon v-else color="black"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="rounded-lg">
          {{ item.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  data() {
    var allQA = [
      {
        question: "Posso ter uma conta na Rede Linux?",
        answer:
          "Apenas pessoas vinculadas ─ professor, aluno, pesquisador visitante ─ ao IME USP podem ter contas na Rede GNU-Linux. \
            Caso você não seja estudante do IME, mas curse disciplina da computação, faremos uma conta para você ─ de um semestre de duração \
            ─ mediante apresentação de comprovante de matrícula na disciplina. \n\n \
            Coisas como criar contas para eventos, visitantes associados ao IME, e \
            similares podem ser discutidas ─ por email ─ com os admins.",
      },
      {
        question: "Como obter conta na Rede Linux?",
        answer:
          "Acesse conta.linux.ime.usp.br e faça login com sua senha única da USP. Este sistema ainda está em fase de testes e pode conter um bug ou outro. \
            Se o login falhar, tente alguns minutos mais tarde. Caso não consiga fazer a conta por esse sistema, por favor contate-nos via e-mail relatando a \
            falha em detalhes e anexando fotos da carteirinha USP (ou comprovante de matrícula -- emissível via Júpiter) para que possamos criar a conta. ",
      },
      {
        question: "Quanto tempo durará minha conta?",
        answer:
          "Enquanto durar seu vínculo com o IME, sendo renovada após 4 anos de curso, se você for estudante do IME. Um semestre, se apenas cursar uma disciplina MAC. \
            Ou permanentemente, caso você seja docente ou ex administrador.\n\n Próximo do período de expiração da conta, enviaremos um email ao endereço \
            cadastrado na criação de sua conta ─ para que você possa tomar as medidas necessárias ou pleitear maior duração para a mesma.",
      },
      {
        question: "Como eu mudo/recupero minha senha?",
        answer:
          "Há diversas formas de fazê-lo. Remotamente, em particular, há duas opções: acessar a rede remotamente e rodar o comando $ kpasswd \
            (caso você se lembre da senha e tenha acesso remoto ativado) ou acessar conta.linux.ime.usp.br e pedir pela geração de uma nova senha. Note que, em todo o caso, \
            você terá de ter acesso remoto ativado, caso queira mudar sua senha aleatória para uma de sua preferência. A ativação do acesso remoto pode ser feita por este mesmo sistema. \
            Presencialmente, você pode comparecer à nossa sala (caso as coisas já tenham retornado a uma certa “normalidade”) munido de sua carteirinha USP ou comprovante de matrícula (o Júpiter emite),\
            e, depois, fazer login em qualquer uma de nossas estações, abrir um terminal e rodar $ kpasswd, como citado anteriormente. Caso o sistema automático de recuperação de senha não funcione, por favor contate-nos.\
            Faça um relato detalhado e anexe os mesmos documentos citados no parágrafo anterior para que possamos confirmar sua identidade.",
      },
      {
        question: "Como ver minha cota de impressão?",
        answer:
          "Para a cota de impressão, você pode executar $ quotap ou olhar no nosso website ao logar-se com seu usuário e senha da rede. ",
      },
      {
        question: "O que ocorre com uma conta expirada?",
        answer:
          "Após haver sido deletada, os arquivos dela também o serão. Teoricamente, no entanto, elas podem nos backups da rede por algum tempo, e você poderá, se for este o caso, reavê-los.\
            É preferível, no entretanto, não depender do backup da rede, pois ele é notoriamente não-feito. ",
      },
      {
        question: "Como uso o email@linux.ime.usp.br?",
        answer:
          "Email Linux pode ser acessado pelo link https://webmail.linux.ime.usp.br ou por aplicações de terminal como o mutt, etc. ",
      },
      {
        question: "Como modificar o meu site /~meu-nome?",
        answer:
          "O conteúdo de seu website está em ~/www. Mude o index.html, edite como lhe convier.\n\n\
            Atualmente, temos PHP habilitado, entre outras coisas. Lembre-se de atentar-se às permissões de acesso de sua home e site.",
      },
      {
        question: "Como sair de uma lista de email?",
        answer:
          "As listas de Email são:\n\n\
            admin@linux.ime.usp.br ─ Lista dos administradores da Rede Linux\n\
            users@linux.ime.usp.br ─ Lista de todos os usuários da rede\n\
            users-bcc@linux.ime.usp.br ─ Lista do Bacharelado em Ciência da Computação\n\n\
            Para se inscrever, saír ou mudar sua senha da lista. Por favor, entre em nos seguintes links: Lista de users, lista de users-bcc.",
      },
    ];
    var activeItens = [];
    for (let i = 0; i < allQA.length; i++) activeItens.push(false);
    return {
      faqContent: allQA,
      itemStatus: activeItens,
    };
  },
  methods: {
    togglePanels(index) {
      for (let i = 0; i < this.itemStatus.length; i++) {
        if (i != index) this.itemStatus.splice(i, 1, false);
        else this.itemStatus.splice(i, 1, !this.itemStatus[i]);
      }
    },
  },
};
</script>
<style scoped>
.v-expansion-panel-content {
  white-space: pre-line;
  color: #797979;
  background-color: #f2f2f2;
}
.v-expansion-panel {
  margin: 8px;
  padding: 0;
}
.v-expansion-panel-header {
  margin-bottom: -10px;
  z-index: 1;
}
</style>
