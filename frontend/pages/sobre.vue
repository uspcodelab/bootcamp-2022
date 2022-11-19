<template>

    <div class="d-flex flex-column">

        <SecaoTitulo
            icon="mdi-information"
            title="Sobre Nós"
        >
        </SecaoTitulo>
        
        <v-container>
                <p class="mt-4">
                    &emsp;&emsp;
                    Somos uma rede de computadores rodando a Debian,
                    uma distro GNU/Linux, no Instituto de Matemática e Estatística
                    da USP.A história dela data de meados dos anos noventa, quando 
                    o Linux começa a ser paulatinamente adotado pelo instituto. Em 
                    1995, na sala 125 do bloco A, consolida-se o primeiro laboratório
                    Linux, que mais tarde, se tornaria a sala da administração da rede.
                </p>
                <p>
                    &emsp;&emsp;
                    A gestão, administração e manutenção da rede, seus computadores, 
                    servidores e impressora são feitas por estudantes de graduação do 
                    próprio insituto com participação ─ também ─ de estudantes de outros 
                    institutos, eventualmente. Nosso propósito é oferecer um ambiente para 
                    estudo e convívio social e disponibilizar recursos de informática para 
                    fins acadêmicos e para a comodidade dos nossos usuários.
                </p>
                <p>
                    &emsp;&emsp;
                    Em geral, procuramos, com algumas poucas exceções, fornecer ao usuário 
                    pronto acesso a softwares livres, tais como LibreOffice, GIMP, Octave, 
                    dentre outros. Softwares proprietários são apenas instalados quando não 
                    existir uma opção livre viável, ou quando explicitamente requerido por um 
                    docente ou um número de estudantes.
                </p>
            <h2 class="mt-4 mb-2">Recursos</h2>
                <ul>
                    <li>Impressão: 75 páginas mensais por usuário.</li>
                    <li>Scanner: embutido na impressora, envio para e-mail.</li>
                    <li>Cota de disco: 5 GB por usuário.</li>
                    <li>E-mail: 256 MB, acesso via IMAP e Webmail.</li>
                    <li>Site: um espaço para hospedar sites na rede.</li>
                    <li>Estações de trabalho: salas 130A e 256A.</li>
                    <li>Acesso remoto e servidor de processamento</li>
                </ul>
            <h3>Funcionamento</h3>
                <p>
                    &emsp;&emsp;
                    A rede funciona, efetivamente, como a sala pró-aluno do IME. A administração, 
                    como mencionado anteriormente, está sob a batuta de um pequeno grupo de alunos 
                    da graduação, os quais recebem bolsas de monitoria da pelo programa pró-aluno. 
                    Nossa missão é dispor aos usuários os recursos destacados acima (e eventuais 
                    outros recursos que possamos ceder, futura ou presentemente) com o mínimo de 
                    interrupção possível. Neste sentido, a rede constitui, para os que nela trabalham, 
                    numa forma de aprendizado. Os mecanismos presentes numa rede são, frequentemente, 
                    complexos e exigem certo treino e estudo, que aqui pode ser obtido na prática.
                </p>
                <p>
                    &emsp;&emsp;
                    Ressaltemos, portanto, que, em raras ocasiões, problemas de maior escala podem 
                    exigir um pouco mais de tempo em suas resoluções do que normalmente exigiriam de 
                    analistas de sistema mais experientes. Tentamos garantir a integridade do serviço e 
                    dos dados, dispondo de sistemas de armazenamento com redundância e backups sazonais. 
                    Mas, como sistema computacional algum está livre de falhas, nunca deixe de fazer 
                    cópias dos arquivos mais importantes.
                </p>
            <h2 class="my-4">Responsáveis</h2>
                <p>
                    &emsp;&emsp;
                    O Prof. Dr. Carlos Eduardo Ferreira é responsável por nossa seção, sendo, 
                    em última instância, nosso representante. Por parte da Seção de Informática, 
                    temos a tutela de William Gnann e Sérgio Milare.
                </p>
        </v-container>
        <SecaoTitulo
            icon="mdi-book-open-blank-variant"
            title="Nossa História"
        >
        </SecaoTitulo>
        <v-container>
            <h2 class="my-4">Primeiros Passos</h2>
            <p>
                &emsp;&emsp;
                A Rede Linux IME-USP do IME começou através de uma iniciativa pioneira dentro 
                da universidade, protagonizada, na época, por dois alunos de graduação em Ciência da Computação: 
                Félix F. B. de Almeida e Adriano N. Rodrigues. 
            </p>
            <p>
                &emsp;&emsp;Desde 1994, Adriano, então aluno do 2º ano, já possuía acesso às 
                estações de trabalho da rede principal do IME-USP pelo fato de participar de 
                projetos de iniciação científica dentro do Instituto (o acesso à rede principal 
                do Instituto é limitado aos docentes e alunos de pós-graduação ou de iniciação científica). 
                Com isso, ele e o seu amigo e colega de classe, Félix, tomaram contato com um 
                sistema operacional UNIX e com as facilidades da Internet, que naquela época 
                eram totalmente desconhecidos do público em geral.
            </p>
            <p>
                &emsp;&emsp;
                Contagiado por essas facilidades e pelo novo paradigma desvendado pelo ambiente 
                UNIX, Adriano procurava transmitir para Félix os conhecimentos que estava adquirindo 
                como usuário da rede do IME-USP. Não demorou muito para que ambos ficassem sabendo da 
                existência do recém criado Linux. Foi então que Félix, percebendo que com o Linux também 
                poderia usufruir de um ambiente UNIX no seu microcomputador caseiro, decidiu importar um CD 
                e um livro sobre o assunto. Com isso, tanto Félix quanto Adriano começaram a estudar 
                esse sistema operacional incipiente, contando com a ajuda de alguns professores do 
                instituto que já haviam tido alguma experiência com o Linux.
             </p> 
        <h2 class="my-4">Criação</h2>
            <p>
                &emsp;&emsp;
                No início de 1995, depois de alguma insistência por parte dos dois alunos, 
                o Departamento de Ciência da Computação cedeu-lhes uma sala pequena e quatro 
                microcomputadores num dos cantos do Instituto para que pudessem se aprofundar no assunto.
            </p> 
            <p>
                &emsp;&emsp;
                Em face das dificuldades encontradas durante o processo de montagem de uma 
                Rede Linux, usando esses quatro microcomputadores e com a crescente divulgação 
                que o Linux vinha recebendo devido ao aumento da popularidade da Internet é 
                que Félix, em meados de 1995, teve a ideia de criar um núcleo de apoio e troca 
                de informações para todos aqueles que estivessem na mesma situação que eles, 
                ou seja, aprendendo a instalar e configurar microcomputadores com Linux. Essa 
                ideia foi muito bem recebida pelo departamento, que, para facilitar a divulgação 
                dessa atividade, resolveu permitir o acesso de Félix à rede principal do IME-USP. 
                Esse núcleo de apoio aos usuários de Linux foi batizado de Grupo de Usuários Linux, 
                ou simplesmente GUL.
            </p> 
            <p>
                &emsp;&emsp; Depois de um período de experiência, e já contando com o acesso à 
                Internet (gentilmente cedido pelo Instituto), Félix e Adriano resolveram liberá-la 
                para ser usada pelos alunos do Bacharelado em Ciência da Computação em março de 1997, 
                julgando ser de relevante importância para a formação desses alunos o acesso a um 
                email próprio e à World Wide Web bem como o contato com um sistema operacional UNIX.
            </p> 
            <p>
                &emsp;&emsp;
                Não demorou muito para que esse projeto ganhasse destaque dentro do Instituto e, com 
                isso, mais salas e microcomputadores foram sendo incorporados à Rede Linux, bem como mais 
                alunos foram tomando conhecimento e participando dele. As disciplinas do curso de computação 
                também começaram a usar os recursos oferecidos pela Rede Linux durante os períodos letivos, 
                o que aumentou ainda mais a adesão ao projeto. Desta maneira, acabaram surgindo dois projetos 
                separados porém relacionados: a Rede Linux IME-USP e o Grupo de Usuários Linux.
            </p> 
            <p>
                &emsp;&emsp;
                GUL também mostrou seu valor quando, no final de 1997, recebeu o prêmio Os 
                Vencedores da revista Info em nome de toda a comunidade Linux do Brasil. 
                Esse prêmio foi entregue numa cerimônia de gala realizada no hotel Renaissance 
                em São Paulo, onde estavam presentes representantes de todas as grandes empresas de 
                informática do país bem como expoentes do mundo jornalístico.
            </p> 
        <h2 class="my-4">Apoio via Pró-Aluno</h2>
            <p>
                &emsp;&emsp;
                Dado o sucesso do projeto da Rede Linux, a universidade decidiu dar apoio a 
                ele através do Programa Pró-Aluno. Com isso, em março de 1999, foi inaugurada 
                a sala Pró-Aluno do IME-USP abrindo a possibilidade de que todos os alunos de 
                graduação do Instituto pudessem utilizá-la, não ficando mais restrita somente aos 
                alunos de Computação. Desse modo, a Rede Linux se estabeleceu como plataforma 
                para a graduação dentro do Instituto e o GUL como veículo para intercâmbio de 
                informações entre usuários Linux de todo o país.
            </p> 
        <h2 class="my-4">Dias de Hoje</h2>
            <p>
                &emsp;&emsp;
                Atualmente, a Rede Linux é administrada por alunos do
                IME e e FFLCH.
            </p>
	    <h2>Administrações</h2>

        <div class="admContainer">
            <h3>Fundadores</h3>
            <time>1997</time>
            <ul>
                <li>     Adriano Nagelschmidt Rodrigues ─ saída em 1999.  </li>

                <li>     Félix Freire Barbosa de Almeida ─ saída em 2000. </li>
                
                <li> Daniel Imamura  ─ saída em 1998. </li>

                <li> Leonardo Rochael Almeida  ─ saída em 1998. </li>

                <li>     Rogério Theodoro de Brito ─ saída em 1998. </li>
                
                <li> Sérgio Lopes de Oliveira  ─ saída em 1999. </li>
            </ul>
        </div>
            <h3>2ª Geração</h3>
            <time>1998</time>
            <ul>
                <li>              Alex Pires de Camargo ─ saída em 2000. </li>

                <li>Caetano Jimenez Carezzato ─ saída em 2001.  </li>

                <li>              Leonardo Marques Alves de Pinho  ─ saída em 2000.                </li>

                <li>              Livio Baldini Soares ─ saída em 2001.                </li>

                <li>Marcio Rodrigo de Freitas Carneiro ─ saída em 2000.  </li>

                <li>Rafael Caetano dos Santos ─ saída em 2000.  </li>
            </ul>

            <time>2000</time>
            <ul>
                <li>              Adriano Lopes Pereira ─ saída em 2001.
                </li>
                
                <li>Breno Pompeu Roberto ─ saída em 2001.  </li>

                <li>Emérson Luiz Navarro Tozette ─ saída em 2001.  </li>
            </ul>


            <h3>4ª Geração</h3>
            <time>2003</time>
            <ul>
                <li>    Arthur Biazon Machado ─ saída em 2005.  </li>
                
                <li>    Bruno Takahashi C. de Oliveira ─ saída em 2005.  </li>
                
                <li>    Daniel Matuki da Cunha ─ saída em 2005.  </li>
                
                <li>Eduardo Miyoshi Kasa ─ saída em 2005.  </li>
                
                <li>    Eduardo Teruo Katayama ─ saída em 2005.  </li>
                
                <li>    Patricia Megumi Matsumoto ─ saída em 2005.  </li>
                
                <li>    Wylliam Miguita ─ saída em 2005.  </li>
            </ul>

            <h3>5ª Geração</h3>
            <time>2005</time>
            <ul>
                <li>    Daniel Bento de Paula ─ saída em 2007.  </li>
                
                <li>    Danielle Tiemy Paulo Miazaki ─ saída em 2007.  </li>
                
                <li>    Guilherme Camilo Amantea ─ saída em 2007.  </li>
                
                <li>    Guilherme Santos Grise ─ saída em 2007.  </li>
                
                <li>    Gustavo Henrique Braga ─ saída em 2007.  </li>
                
                <li>    Jan Marcel Paiva Gentil ─ saída em 2007.  </li>
                
                <li>    João Francisco Amorim Enomoto ─ saída em 2007.  </li>
                
                <li>    Rafael de Oliveira Lopes Goncalves ─ saída em 2007.  </li>
            </ul> 

            <h3>6ª Geração</h3>
            <time>2007</time>
            <ul>
                <li>    Carlos Eduardo Moreira dos Santos ─ saída em 2009.  </li>
                
                <li>    Cesar Gamboa Machado ─ saída em 2009.  </li>
                
                <li>    Evandro Fernandes Giovanini ─ saída em 2009.  </li>
                
                <li>    Lucas Mendes Marques Gonçalves ─ saída em 2009.  </li>
                
                <li>    Lucas Piva Rocha Correa ─ saída em 2009.  </li>
                
                <li>    Lucas Pereira Porto ─ saída em 2009.  </li>
                
                <li>Rodolfo Lopes Castanheira ─ saída em 2009.  </li>
            </ul> 

            <h3>7ª Geração</h3>
            <time>2009</time>
            <ul>
                <li>    Alberto Bueno Júnior ─ saída em 2011.  </li>
                
                <li>    Ana Luiza Domingues Fernandez Basalo ─ saída em 2011.  </li>
                
                <li>    Bruno Padilha ─ saída em 2011.  </li>
                
                <li>    Daniel Francisco Reverbel ─ saída em 2011.  </li>
                
                <li>    Gregory Gonçalves de Bonis ─ saída em 2011.  </li>
                
                <li>    Lucas Guimarães Gassert ─ saída em 2011.  </li>
                
                <li>    William Alexandre Miura Gnann ─ saída em 2011.  </li>
            </ul>

            <h3>8ª Geração</h3>
            <time>2011</time>
            <ul>
                <li>    Leandro Gonçalves Botelho dos Santos ─ saída em abril de 2011.  </li>

                <li>    André Spanguero Kanayama  ─ saída em 2013.  </li>

                <li>    Caio Renato Bedulli do Carmo ─ saída em 2013.  </li>

                <li>    Daniel Paulino Alves ─ saída em 2013.  </li>

                <li>    Leonardo Schäffer ─ saída em 2013.  </li>

                <li>    Rafael Batista Carmo ─ saída em 2013.  </li>

                <li>    Renato Scaroni ─ saída em 2013.  </li>

                <li>    Henrique Gemignani Passos Lima ─ saída em 2013.  </li>
            </ul>

            <h3>9ª Geração</h3>
            <time>2013</time>
            <ul>
                <li>    Duilio Felix Oliveira da Silva ─ saída em 2015.  </li>
                
                <li>    Daniel de Quadros Miranda ─ saída em 2015.  </li>

                <li>    Edênis Freindorfer Azevedo ─ saída em 2015.  </li>

                <li>    Evandro Augusto Nunes Sanches ─ saída em 2015.  </li>

                <li>    Vitor Cerqueira Santos ─ saída em 2015.  </li>

                <li>    Ricardo Ferreira Guimaraes ─ saída em 2015.  </li>

                <li>    Ricardo Mikio Morita ─ saída em 2015.  </li>
            </ul>

            <h3>10ª Geração</h3>
            <time>2015</time>
            <ul>
                <li>    Gustavo Chicato ─ saída em outubro de 2015.  </li>

                <li>    Amadeu Shigeo de Almeida ─ saída em janeiro de 2016.  </li>

                <li>    Rodrigo Souza ─ saída em outubro de 2016.  </li>
            </ul>

            <time>2016</time>
            <ul>
                <li>    André Luiz Abdalla Silveira ─ saída em 2017.  </li>

                <li>    Carybé Gonçalves Silva ─ saída em 2017.  </li>

                <li>    Duilio Henrique Haroldo Elias ─ saída em 2017.  </li>

                <li>    Fernanda de Camargo Magano ─ saída em 2017.  </li>

                <li>    Renato Silva Bispo ─ saída em 2017.  </li>

                <li>    Gabriel Kazuyuki ─ saída em 2017.  </li>
            </ul>

            <h3>11ª Geração</h3>
            <time>2017</time>
            <ul>
                <li>     Anderson Andrei da Silva ─ saída em 2019. </li>

                <li>     Bruno Boaventura Scholl ─ saída em 2019. </li>

                <li>     Juliano Garcia de Oliveira ─ saída em 2019. </li>

                <li>     Paulo Henrique Araújo ─ saída em 2019. </li>
                
                <li>     Renan Tiago da Silva ─ saída em 2019. </li>

                <li>     Victor Seiji Hariki ─ saída em 2019. </li>
            </ul>

            <h3>12ª Geração</h3>
            <time>2019</time>
            <ul>
                <li>    Cainã Setti Galante - saída em 2021.  </li>

                <li>    Débora D'Angelo Reina de Araujo  </li>
                
                <li>    Guilherme Costa Vieira - saída em 2020.  </li>

                <li>    João Pedro Turri  </li>
                <li>    José Goudet Alvim (foi voluntário e oficial)  </li> 

                <li>    Leonardo Martinez Ikeda ─ saída em 2019.   </li>

                <li>    Matheus Tararam de Laurentys - saida em 2021  </li>

                <li>    Pedro T. R. Pinheiro (foi voluntário e oficial)  </li>

                <li>    Rodrigo Orem da Silva ─ saída em 2019.   </li>

                <li>    Victor Chiaradia Gramuglia Araujo - saída em 2022.  </li>
            </ul>
            
            <h3>13ª Geração</h3>
            <time>2020</time>
            
            <ul>
                <li>    Daniel Souza Martinez - saída em 2022.  </li>

                <li>    André Balieiro P. da Silva - saida em 2021.  </li>

                <li>    Derick William de M. Frias  </li>
            </ul>
        

        </v-container>
    </div>

</template>
<!-- 
    <p>
        &emsp;&emsp;
    </p> 
-->
<style scoped>
p{
    max-width: 900px;
    text-align: justify;
}
h3{
    margin: 10px 0 10px 0;
}
.admContainer{
    display: flex;
    flex-direction: column;

}

</style>