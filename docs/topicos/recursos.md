# 3. Principais Recursos e Funcionalidades

<p style="text-align:justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Nesta página, está a descrição dos principais recursos e funcionalidades que serão implementados no software e listagem das principais capacidades que o sistema oferecerá aos usuários, feita na forma de duas listas, dos requisitos funcionais (RFs, que dizem respeito às exigências de funcionalidade do aplicativo SportFind) e requisitos não funcionais (RNFs, que dizem respeito às características do sistema como compatibilidade, segurança, criptografia, capacidade de acessos simultâneos, etc.).
</p>

## 3.1 Requisitos Funcionais

<p style="text-align:justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Abaixo está uma lista contendo os principais requisitos funcionais do SportFind, assim como, uma breve descrição da funcionalidade destes requisitos e sua prioridade.
</p>

<table>
  <tr>
    <th>Identificador</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Prioridade</th>
  </tr>

  <tr>
    <td>RF.001</td>
    <td>Manter Usuário</td>
    <td>O sistema deve manter o cadastro dos usuários, executando as 4 principais operações (CRUD).</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.002</td>
    <td>Verificar Perfil</td>
    <td>O sistema deve identificar o tipo de usuário ao realizar o login (locador ou locatário).</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.003</td>
    <td>Chat</td>
    <td>O sistema deve permitir que usuários se comuniquem através de uma ferramenta de chat.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.004</td>
    <td>Solicitar Reserva</td>
    <td>O sistema deve permitir que usuários do tipo Locatário cadastrem um formulário indicando o número de pessoas, data e hora da reserva desejada.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.005</td>
    <td>Aprovar Reserva</td>
    <td>O sistema deve permitir que usuários do tipo Locador aprovem a reserva de seus locais em determinada data e hora, baseado na solicitação de reserva (RF004).</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.006</td>
    <td>Manter Local</td>
    <td>O sistema deve permitir que usuários do tipo Locador cadastrem um local para exibir horários de funcionamento, horários reservados e disponíveis, fotos e avaliações.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.007</td>
    <td>Realizar Pagamento</td>
    <td>O sistema deve permitir pagamentos da locação do espaço, de maneira online, via cartão, pix, ou mesmo permitir a opção para pagar com dinheiro físico presencialmente no estabelecimento do locatário.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.008</td>
    <td>Finalizar Reserva</td>
    <td>O sistema deve aprovar a reserva, baseado na aprovação do locatário.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.009</td>
    <td>Calcular Taxa</td>
    <td>O sistema deve calcular, para pré-pagamentos, qual será o valor revertido para a SportFind.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RF.010</td>
    <td>Avaliar Local</td>
    <td>O sistema deve permitir que usuários do tipo Locatário cadastrem uma avaliação sobre locais que tenham reservado.</td>
    <td>Intermediária</td>
  </tr>

  <tr>
    <td>RF.011</td>
    <td>Favoritar Local</td>
    <td>O sistema deve permitir que o usuário selecione os locais que mais lhe interesse e possibilitar uma listagem dos mesmos.</td>
    <td>Intermediária</td>
  </tr>

</table>

## 3.2 Requisitos Não Funcionais

<p style="text-align:justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Abaixo está uma lista contendo os principais requisitos não funcionais do SportFind, assim como, uma breve descrição da funcionalidade destes requisitos e sua prioridade.
</p>

<table>
  <tr>
    <th>Identificador</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Prioridade</th>
  </tr>

  <tr>
    <td>RNF.001</td>
    <td>Responsividade</td>
    <td>O sistema deve ser capaz de operar em dispositivos de diferentes tamanhos e proporções de tela.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RNF.002</td>
    <td>Compatibilidade de Sistema</td>
    <td>O sistema deve operar em dispositivos Android (v. 9 a 12) e iOS (v. 13 a 16).</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RNF.003</td>
    <td>Criptografia</td>
    <td>O sistema deve usar criptografia para manter as senhas e conversas e dados de pagamento.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RNF.004</td>
    <td>Tempo de Resposta</td>
    <td>O sistema deve respeitar o tempo limite de 120 segundos entre operações.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RNF.005</td>
    <td>Capacidade de Usuários</td>
    <td>O sistema deve ser capaz de suportar o acesso simultâneo de até 500 usuários.</td>
    <td>Alta</td>
  </tr>

  <tr>
    <td>RNF.006</td>
    <td>Armazenamento de Dados</td>
    <td>O sistema deve armazenar dados em banco de dados gratuito, com alta disponibilidade, que permite backup e restore dos dados.</td>
    <td>Alta</td>
  </tr>

</table>
