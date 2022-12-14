INSERT INTO FAQ (question, answer)
VALUES ('Posso ter uma conta na Rede Linux?', 'Apenas pessoas vinculadas ─ professor, aluno, pesquisador visitante ─ ao IME USP podem ter contas na Rede GNU-Linux. Caso você não seja estudante do IME, mas curse disciplina da computação, faremos uma conta para você ─ de um semestre de duração ─ mediante apresentação de comprovante de matrícula na disciplina. \n\n Coisas como criar contas para eventos, visitantes associados ao IME, e similares podem ser discutidas ─ por email ─ com os admins.');

INSERT INTO FAQ (question, answer)
VALUES ('Como obter conta na Rede Linux?', 'Acesse conta.linux.ime.usp.br e faça login com sua senha única da USP. Este sistema ainda está em fase de testes e pode conter um bug ou outro. Se o login falhar, tente alguns minutos mais tarde. Caso não consiga fazer a conta por esse sistema, por favor contate-nos via e-mail relatando a falha em detalhes e anexando fotos da carteirinha USP (ou comprovante de matrícula -- emissível via Júpiter) para que possamos criar a conta.');

INSERT INTO FAQ (question, answer)
VALUES ('Quanto tempo durará minha conta?', 'Enquanto durar seu vínculo com o IME, sendo renovada após 4 anos de curso, se você for estudante do IME. Um semestre, se apenas cursar uma disciplina MAC. Ou permanentemente, caso você seja docente ou ex administrador.\n\n Próximo do período de expiração da conta, enviaremos um email ao endereço cadastrado na criação de sua conta ─ para que você possa tomar as medidas necessárias ou pleitear maior duração para a mesma.');

INSERT INTO FAQ (question, answer)
VALUES ('Como eu mudo/recupero minha senha?', 'Há diversas formas de fazê-lo. Remotamente, em particular, há duas opções: acessar a rede remotamente e rodar o comando $ kpasswd (caso você se lembre da senha e tenha acesso remoto ativado) ou acessar conta.linux.ime.usp.br e pedir pela geração de uma nova senha. Note que, em todo o caso, você terá de ter acesso remoto ativado, caso queira mudar sua senha aleatória para uma de sua preferência. A ativação do acesso remoto pode ser feita por este mesmo sistema. Presencialmente, você pode comparecer à nossa sala (caso as coisas já tenham retornado a uma certa “normalidade”) munido de sua carteirinha USP ou comprovante de matrícula (o Júpiter emite), e, depois, fazer login em qualquer uma de nossas estações, abrir um terminal e rodar $ kpasswd, como citado anteriormente. Caso o sistema automático de recuperação de senha não funcione, por favor contate-nos. Faça um relato detalhado e anexe os mesmos documentos citados no parágrafo anterior para que possamos confirmar sua identidade.');

INSERT INTO FAQ (question, answer)
VALUES ('Como ver minha cota de impressão?', 'Para a cota de impressão, você pode executar $ quotap ou olhar no nosso website ao logar-se com seu usuário e senha da rede.');

INSERT INTO FAQ (question, answer)
VALUES ('O que ocorre com uma conta expirada?', 'Após haver sido deletada, os arquivos dela também o serão. Teoricamente, no entanto, elas podem nos backups da rede por algum tempo, e você poderá, se for este o caso, reavê-los. É preferível, no entanto, não depender do backup da rede, pois ele é notoriamente não-feito.');

INSERT INTO FAQ (question, answer)
VALUES ('Como uso o email@linux.ime.usp.br?', 'Email Linux pode ser acessado pelo link https://webmail.linux.ime.usp.br ou por aplicações de terminal como o mutt, etc.');

INSERT INTO FAQ (question, answer)
VALUES ('Como modificar o meu site /~meu-nome?', 'O conteúdo de seu website está em ~/www. Mude o index.html, edite como lhe convier.\n\n Atualmente, temos PHP habilitado, entre outras coisas. Lembre-se de atentar-se às permissões de acesso de sua home e site.');

INSERT INTO FAQ (question, answer)
VALUES ('Como sair de uma lista de email?', 'As listas de Email são:\n\n admin@linux.ime.usp.br ─ Lista dos administradores da Rede Linux\n users@linux.ime.usp.br ─ Lista de todos os usuários da rede\n users-bcc@linux.ime.usp.br ─ Lista do Bacharelado em Ciência da Computação\n\n Para se inscrever, saír ou mudar sua senha da lista. Por favor, entre em nos seguintes links: Lista de users, lista de users-bcc.');
