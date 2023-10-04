

Crie a variável primeiroNumero e atribua a ela o valor 178;
Crie a variável segundoNumero e atribua a ela o valor 93;
Crie a variável resultadoDaSoma e atribua a ela a soma entre as variáveis primeiroNumero e segundoNumero. */

// Crie a variável primeiroNumero e atribua a ela o valor 178
let primeiroNumero = 178;

// Crie a variável segundoNumero e atribua a ela o valor 93
let segundoNumero = 93;

// Crie a variável resultadoDaSoma e atribua a ela a soma entre as variáveis primeiroNumero e segundoNumero
let resultadoDaSoma = primeiroNumero + segundoNumero;

// Agora você pode imprimir o resultado da soma
console.log(resultadoDaSoma); // Isso irá imprimir 271

/*O objetivo deste exercício é realizar a subtração entre 133 e 87. Para isso:

Crie a variável primeiroNumero e atribua a ela o valor 133;
Crie a variável segundoNumero e atribua a ela o valor 87;
Crie a variável resultadoDaSubtracao e atribua a ela a subtração entre as variáveis primeiroNumero e segundoNumero.*/

// Crie a variável primeiroNumero e atribua a ela o valor 133
let primeiroNumero = 133;

// Crie a variável segundoNumero e atribua a ela o valor 87
let segundoNumero = 87;

// Crie a variável resultadoDaSubtracao e atribua a ela a subtração entre as variáveis primeiroNumero e segundoNumero
let resultadoDaSubtracao = primeiroNumero - segundoNumero;

// Agora você pode imprimir o resultado da subtração
console.log(resultadoDaSubtracao); // Isso irá imprimir 46

/*O objetivo deste exercício é realizar a divisão de 192 por 12. Para isso:

Crie a variável dividendo e atribua a ela o valor 192;
Crie a variável divisor e atribua a ela o valor 12;
Crie a variável resultadoDaDivisao e atribua a ela a divisão da variável dividendo pela variável divisor.*/
// Crie a variável dividendo e atribua a ela o valor 192
let dividendo = 192;

// Crie a variável divisor e atribua a ela o valor 12
let divisor = 12;

// Crie a variável resultadoDaDivisao e atribua a ela a divisão da variável dividendo pela variável divisor
let resultadoDaDivisao = dividendo / divisor;

// Agora você pode imprimir o resultado da divisão
console.log(resultadoDaDivisao); // Isso irá imprimir 16

/*O objetivo deste exercício é realizar a multiplicação de 133 por 13. Para isso:

Crie a variável multiplicador e atribua a ela o valor 133;
Crie a variável multiplicando e atribua a ela o valor 13;
Crie a variável resultadoDaMultiplicacao e atribua a ela a multiplicação da variável multiplicador;pela variável multiplicando.*/

// Crie a variável multiplicador e atribua a ela o valor 133
let multiplicador = 133;

// Crie a variável multiplicando e atribua a ela o valor 13
let multiplicando = 13;

// Crie a variável resultadoDaMultiplicacao e atribua a ela a multiplicação da variável multiplicador pela variável multiplicando
let resultadoDaMultiplicacao = multiplicador * multiplicando;

// Agora você pode imprimir o resultado da multiplicação
console.log(resultadoDaMultiplicacao); // Isso irá imprimir 1729

/*O objetivo deste exercício é encontrar o resultado da potência de base 2 e expoente 10. Para isso:

Crie a variável base e atribua a ela o valor 2;
Crie a variável expoente e atribua a ela o valor 10;
Crie a variável potencia e atribua a ela a operação da variável base elevada a variável expoente.
*/
// Crie a variável base e atribua a ela o valor 2
let base = 2;

// Crie a variável expoente e atribua a ela o valor 10
let expoente = 10;

// Crie a variável potencia e atribua a ela a operação da variável base elevada à variável expoente
let potencia = Math.pow(base, expoente);

// Agora você pode imprimir o resultado da potência
console.log(potencia); // Isso irá imprimir 1024

/*O objetivo deste exercício é encontrar o resto da divisão de 11 por 3. Para isso:

Crie a variável dividendo e atribua a ela o valor 11;
Crie a variável divisor e atribua a ela o valor 3;
Crie a variável restoDaDivisao e atribua a ela a o resto da divisão entre a variável dividendo pela variável divisor.*/

// Crie a variável dividendo e atribua a ela o valor 11
let dividendo = 11;

// Crie a variável divisor e atribua a ela o valor 3
let divisor = 3;

// Crie a variável restoDaDivisao e atribua a ela o resto da divisão entre a variável dividendo pela variável divisor
let restoDaDivisao = dividendo % divisor;

// Agora você pode imprimir o resultado do resto da divisão
console.log(restoDaDivisao); // Isso irá imprimir 2

/*Crie e compare variáveis: É menor, maior ou igual? 🤔
Imagine que você precisa comprar duas peças de roupa, entretanto, após o pagamento de suas contas, você tem somente R$ 60,00 reais para gastar.

Faça um algoritmo para verificar se as duas peças de que precisa, caberão no seu orçamento.

a. Crie duas variáveis roupa1 e roupa2:

Na variável chamada de roupa1, você vai adicionar o valor 35;
Na variável chamada de roupa2, você vai adicionar o valor 20;
b. Crie a variável compras:

Atribua a ela o valor da soma entre roupa1 e roupa2;
c. Crie uma variável chamada orcamento:

Verifique se compras é menor ou igual a 60 e atribua o retorno a variável orcamento.*/

// Crie as variáveis roupa1 e roupa2 com os valores das peças de roupa
let roupa1 = 35;
let roupa2 = 20;

// Crie a variável compras e calcule a soma das duas peças
let compras = roupa1 + roupa2;

// Crie a variável orcamento e verifique se o valor das compras é menor ou igual a 60
let orcamento = compras <= 60;

// Agora você pode verificar se as peças caberão no orçamento
if (orcamento) {
  console.log("Você pode comprar as duas peças de roupa.");
} else {
  console.log("As peças de roupa não cabem no seu orçamento.");
}

/*Nesse exercício você vai desenvolver um programa capaz de verificar duas idades.

a. Crie as variáveis idadeDaThays e idadeDoDouglas:

Crie uma variável chamada idadeDaThays e atribua o valor 53;
Crie uma variável chamada idadeDoDouglas e atribua o valor 49;
b. Compare as idades, armazenando o resultado das comparações:

Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.

comparacao1: Compare se idadeDaThays é maior que idadeDoDouglas;
comparacao2: Compare se idadeDoDouglas é menor que idadeDaThays.*/

// Crie as variáveis idadeDaThays e idadeDoDouglas com as idades
let idadeDaThays = 53;
let idadeDoDouglas = 49;

// Compare as idades e armazene o resultado das comparações em variáveis
let comparacao1 = idadeDaThays > idadeDoDouglas;
let comparacao2 = idadeDoDouglas < idadeDaThays;

// Agora você pode verificar as comparações
if (comparacao1) {
  console.log("Idade da Thays é maior que a idade do Douglas.");
} else {
  console.log("Idade da Thays não é maior que a idade do Douglas.");
}

if (comparacao2) {
  console.log("Idade do Douglas é menor que a idade da Thays.");
} else {
  console.log("Idade do Douglas não é menor que a idade da Thays.");
}

/*Verifique as variáveis abaixo e valide as seguintes afirmações utilizando os operadores condicionais:

let nomePessoa1 = 'Cleyton';
let nomePessoa2 = 'Sheila';
let idadePessoa1 = 30;
let idadePessoa2 = 18;
a. Crie as variáveis para armazenar as seguintes comparações:

comparacao1: compare se o nome da pessoa 1 é diferente de Sheila;
comparacao2: compare se a idade da pessoa 1 é igual a 18;
comparacao3: compare se o nome da pessoa 2 é igual a Cleyton;
comparacao4: compare se a idade da pessoa 2 é diferente de 30.
Siga o padrão para o nome das variáveis que armazenarão as comparações comparacaoN, onde N é o número da comparação.*/

let nomePessoa1 = "Cleyton";
let nomePessoa2 = "Sheila";
let idadePessoa1 = 30;
let idadePessoa2 = 18;

// Crie as variáveis para armazenar as comparações
let comparacao1 = nomePessoa1 !== "Sheila"; // Verifique se o nome da pessoa 1 é diferente de Sheila
let comparacao2 = idadePessoa1 === 18; // Verifique se a idade da pessoa 1 é igual a 18
let comparacao3 = nomePessoa2 === "Cleyton"; // Verifique se o nome da pessoa 2 é igual a Cleyton
let comparacao4 = idadePessoa2 !== 30; // Verifique se a idade da pessoa 2 é diferente de 30

/*Neste exercício você precisa desenvolver um programa que verifica e compara a quantidade de itens do estoque de uma loja. Abaixo existem três produtos e suas quantidades já definidos:

  let sapato = 15;
  let chinelo = 22;
  let pantufa = 33;
a. Crie variáveis para armazenar o valor de cada comparação:

verificacao1 compare se o valor da variável sapato é maior ou igual a 15;
verificacao2 compare se o valor da variável chinelo é maior ou igual a 12;
verificacao3 compare se o valor da variável pantufa é menor ou igual a 18;
b. Após ter todas as comparações feitas, imprima no console.log cada verificação.*/
/***** Não altere os códigos dentro desse bloco *****/
let sapato = 15;
let chinelo = 22;
let pantufa = 33;
/***** Não altere os códigos dentro desse bloco *****/
/***** Escreva seu código nas linhas abaixo *****/

// Crie variáveis para armazenar o valor de cada comparação
let verificacao1 = sapato >= 15; // Verifique se o valor da variável sapato é maior ou igual a 15
let verificacao2 = chinelo >= 12; // Verifique se o valor da variável chinelo é maior ou igual a 12
let verificacao3 = pantufa <= 18; // Verifique se o valor da variável pantufa é menor ou igual a 18

// Imprima no console cada verificação
console.log("Verificação 1:", verificacao1); // Deve imprimir true
console.log("Verificação 2:", verificacao2); // Deve imprimir true
console.log("Verificação 3:", verificacao3); // Deve imprimir false

/*Neste exercício você vai criar um validador de senhas. Abaixo, existe uma variável que contém a senha para entrar no wi-fi da casa do Juquinha. Juquinha pediu que você criasse um programa que verifique se a senha digitada é estritamente igual a senha escolhida para acessar o wi-fi.

  let senhaDoWiFi = 159000;

  let senhaDigitada1 = 169000;
  let senhaDigitada2 = 159000;
  let senhaDigitada3 = '159000';
  let senhaDigitada4 = 159000;
a. Crie variáveis suficientes para testar cada uma das senhaDigitadaN:

A senha deve ser estritamente igual a senhaDoWiFi;
Compare cada uma das senhas e atribua o valor da comparação em uma variável chamada verificacaoN, onde N é o número da comparação;
Por último, Utilize as variáveis que você criou para adicionar o resultado da comparação, para mostrar no console se a senha é válida ou não.*/
let senhaDoWiFi = 159000;

let senhaDigitada1 = 169000;
let senhaDigitada2 = 159000;
let senhaDigitada3 = "159000";
let senhaDigitada4 = 159000;

// Crie variáveis para armazenar o valor de cada comparação
let verificacao1 = senhaDigitada1 === senhaDoWiFi; // Verifique se senhaDigitada1 é estritamente igual a senhaDoWiFi
let verificacao2 = senhaDigitada2 === senhaDoWiFi; // Verifique se senhaDigitada2 é estritamente igual a senhaDoWiFi
let verificacao3 = senhaDigitada3 === senhaDoWiFi; // Verifique se senhaDigitada3 é estritamente igual a senhaDoWiFi
let verificacao4 = senhaDigitada4 === senhaDoWiFi; // Verifique se senhaDigitada4 é estritamente igual a senhaDoWiFi

// Utilize as variáveis para mostrar no console se a senha é válida ou não
console.log("Verificação 1:", verificacao1); // Deve imprimir false
console.log("Verificação 2:", verificacao2); // Deve imprimir true
console.log("Verificação 3:", verificacao3); // Deve imprimir false
console.log("Verificação 4:", verificacao4); // Deve imprimir true

/*Verifique o intervalo entre números: será que é par? 🤔
Neste exercício você vai desenvolver um programa que verifica se um número está no intervalo entre 20 e 50 e se o número é par. Abaixo existe uma variável com o número a ser verificado:

  let numero = 30;
a. Você precisa:

verificar se a variável numero é maior ou igual a 20 e menor ou igual a 50, e se o valor contido nela é par;
criar uma variável chamada resultado e atribuir o resultado da verificação a ela;
fazer um console.log do resultado.*/
let numero = 30;

// Verifique se o número está no intervalo entre 20 e 50 e se é par
let resultado = numero >= 20 && numero <= 50 && numero % 2 === 0;

// Imprima o resultado no console
console.log(resultado); // Isso irá imprimir true

/*Abaixo existem duas variáveis, uma se chama local e a outra estadoEmocional:

let local = 'praia';
let estadoEmocional;
A variável local representa o lugar em que a pessoa está no momento;
A variável estadoEmocional representa qual o estado emocional da pessoa ao estar nesse local;
Crie uma lógica para saber o valor de estadoEmocional:

O valor da variável estadoEmocional deve ser uma verificação se o valor da variável local for igual a praia OU a variável local seja igual a cinema;*/
let local = "praia";
let estadoEmocional;

// Verifique se o valor da variável local é igual a 'praia' ou 'cinema'
if (local === "praia" || local === "cinema") {
  estadoEmocional = "Feliz"; // Se o local for 'praia' ou 'cinema, o estado emocional é 'Feliz'
} else {
  estadoEmocional = "Neutro"; // Caso contrário, o estado emocional é 'Neutro'
}

// Imprima o valor do estado emocional no console
console.log(estadoEmocional); // Isso irá imprimir 'Feliz' no caso de 'praia' e 'Neutro' em outros casos

/*Em um laboratório da Nasa, cientistas se depararam com um erro muito grave em alguns dos computadores de bordo da nave Apollo 11. Você foi designado para encontrar a falha e corrigi-la. Ao estudar o código, encontrou as seguintes variáveis:

let temOxigenioNoEspaco = true;
let aTerraEPequena = true;
Para que o erro seja corrigido, você precisa REATRIBUIR os valores dessas variáveis para que os computadores de bordo da nave Apollo 11 voltem a operar normalmente. Para isso:

Reatribua o valor da variável temOxigenioNoEspaco de forma a negar seu valor original;
Reatribua o valor da variável aTerraEPequena de forma a negar seu valor original;*/
let temOxigenioNoEspaco = true;
let aTerraEPequena = true;

// Reatribua o valor da variável temOxigenioNoEspaco negando seu valor original
temOxigenioNoEspaco = !temOxigenioNoEspaco;

// Reatribua o valor da variável aTerraEPequena negando seu valor original
aTerraEPequena = !aTerraEPequena;

// Agora as variáveis foram reatribuídas com os valores negados
console.log(temOxigenioNoEspaco); // Isso irá imprimir false
console.log(aTerraEPequena); // Isso irá imprimir false

/*Utilize as variáveis abaixo para escrever um programa que analisará o login e a senha de uma pessoa usuária:

  let login = 'joabCassimiro';
  let senha = '12345678';
a. Você deve verificar se as credênciais estão corretas:

Crie uma variável que conterá o resultado da verificação, dê a ela o nome de verificaCredenciais;
Compare se a variável login é estritamente igual a joabCassimiro e se a variável senha é estritamente igual a 12345678;
Atribua o retorno da comparação à variável verificaCredenciais.
Imprima no console o resultado da comparação.*/
let login = "joabCassimiro";
let senha = "12345678";

// Crie uma variável para conter o resultado da verificação
let verificaCredenciais = login === "joabCassimiro" && senha === "12345678";

// Imprima o resultado da verificação no console
console.log(verificaCredenciais); // Isso irá imprimir true se as credenciais estiverem corretas, caso contrário, imprimirá false

/*Juninho é um cara gente fina, mas não gosta muito de praia… 🧐 Para ajudar Juninho a mudar de ideia, você deve escrever um programa que vai fazer com que ele goste de praia. Para isso, utilize a variável disponibilizada abaixo e negue o valor dela:

  let gostoPorPraia = false;
a. Você precisa negar o valor contido na variável gostoPorPraia:

Crie uma variável chamada novoGostoPorPraia e atribua a ela a negativa da variável gostoPorPraia;
Imprima o valor da variável novoGostoPorPraia no console.*/
let gostoPorPraia = false;

// Crie uma variável chamada novoGostoPorPraia e atribua a ela a negativa da variável gostoPorPraia
let novoGostoPorPraia = !gostoPorPraia;

// Imprima o valor da variável novoGostoPorPraia no console
console.log(novoGostoPorPraia); // Isso irá imprimir true, indicando que Juninho agora gosta de praia

/*Atribua uma mensagem ✉️
Crie um algoritmo que atribui uma mensagem à variável por meio de uma condicional if.

Para isso, siga as instruções a seguir:

Crie uma variável chamada atribuirMensagem e atribua o valor true à ela;
Crie uma variável chamada mensagem para armazenar uma string que será a mensagem, mas não atribua nenhum valor para ela;
Crie uma estrutura condicional if para que caso a variável atribuirMensagem seja verdadeira, a variável mensagem receba a string 'Olá, Tryber!';
*/
/***** Escreva suas variáveis nas linhas abaixo *****/
let atribuirMensagem = true;
let mensagem;

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (atribuirMensagem) {
    mensagem = "Olá, Tryber!";
    console.log(mensagem);
  }
}

// Chame a função para executar a lógica
ifElseExercise();

/*Com base no seu aprendizado sobre if/else, altere o código onde se encontram os pontos de interrogação (?), seguindo as instruções abaixo:

Uma operação de comparação na condicional if que verifique se o valor da variável lampada é igual a 'ligada';
Uma condicional else que verifique se, caso o valor da variável lampada não for igual a ‘ligada’, então a variável estadoLampada receberá a string 'A lâmpada está desligada!'.*/
let lampada = "ligada";
let estadoLampada;

function ifElseExercise() {
  if (lampada === "ligada") {
    estadoLampada = "A lâmpada está ligada!";
  } else {
    estadoLampada = "A lâmpada está desligada!";
  }
}

/*Crie um algoritmo que verifica se o valor da variável num é par ou ímpar:

let num = 22;
let mensagem;
Se a variável num guarda um valor par, altere a variável mensagem para 'num é par!', onde num é o próprio número. Por exemplo: '6 é par!';
Se a variável num guarda um valor ímpar, exiba a mensagem 'num é ímpar!', onde num é o próprio número. Por exemplo: '7 é ímpar!';
De olho na dica 👀 : Um número inteiro qualquer é dito par se, ao ser dividido pelo número dois, resulta em um número inteiro, ou seja, seu resultado é um número sem casas decimais. Caso contrário, esse número é ímpar.

Use a operação de módulo (%) para descobrir o resto de num / 2.*/
let num = 22;
let mensagem;

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (num % 2 === 0) {
    mensagem = num + " é par!";
  } else {
    mensagem = num + " é ímpar!";
  }

  console.log(mensagem);
}

/*Crie um algoritmo que use duas notas, armazenadas nas variáveis nota1 e nota2, de uma pessoa estudante para calcular a média e utilize a variável resultado para exibir se a pessoa está ou não aprovada:

let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
Calcule a media e salve na variável media;
Se a média calculada for maior ou igual a 7, o valor da variável resultado deve ser: 'Pessoa estudante aprovada';
Se a média calculada for menor que 7, o valor da variável resultado deve ser: 'Pessoa estudante reprovada'.
De olho na dica 👀 : A média de um conjunto de números é obtida somando todos os números desse conjunto e dividindo o resultado dessa soma pela quantidade existente de números. Por exemplo, caso as notas sejam 6 e 7:

Some as duas notas: 6 + 7 = 13;
Como temos duas notas, dividimos o resultado da soma por 2: let media = 13/2 = 6.5;
Você pode fazer: let media = (nota1 + nota2) / 2.*/
/***** Não altere os códigos dentro desse bloco *****/
let nota1 = 8;
let nota2 = 6;
let media;
let resultado;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  media = (nota1 + nota2) / 2;

  if (media >= 7) {
    resultado = "Pessoa estudante aprovada";
  } else {
    resultado = "Pessoa estudante reprovada";
  }

  console.log(resultado);
}

/*Crie um algoritmo de validação de login usando as seguintes informações:

Copiar
let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;
Se o valor de usuario for igual a 'tryber' e se o valor de senha for igual a 'tr1b3', a variável autenticacao deve receber a mensagem 'Autenticação válida!'. Se não, a variável autenticacao deve mostrar a mensagem 'Login e/ou senha incorretos'.
*/
/***** Não altere os códigos dentro desse bloco *****/
let usuario = "tryber";
let senha = "tr1b3";
let autenticacao;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (usuario === "tryber" && senha === "tr1b3") {
    autenticacao = "Autenticação válida!";
  } else {
    autenticacao = "Login e/ou senha incorretos";
  }

  console.log(autenticacao);
}

/*Julia e Erick estão aprendendo a programar em JavaScript pela Trybe. Juntos eles querem construir um algoritmo capaz de informar, no console, qual dos dois é mais velho. Ajude-os a elaborar esse algoritmo com as seguintes condições:

a. Se o valor da variável idadeJulia for maior que o valor da variável idadeErick:

Atribua à variável verificaIdadePessoas a string 'Julia é mais velha que Erick';
b. Caso a condição anterior seja falsa:

Verifique se o valor da variável idadeErick é maior que o valor da variável idadeJulia;
Atribua à variável verificaIdadePessoas a string 'Erick é mais velho que Julia'.
c. Se nenhuma das condições anteriores for verdadeira:

Atribua à variável verificaIdadePessoas a string 'Possuem a mesma idade';

Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';*/

/***** Não altere os códigos dentro desse bloco *****/
let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = "";
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/
  if (idadeJulia > idadeErick) {
    verificaIdadePessoas = "Julia é mais velha que Erick";
  } else if (idadeErick > idadeJulia) {
    verificaIdadePessoas = "Erick é mais velho que Julia";
  } else {
    verificaIdadePessoas = "Possuem a mesma idade";
  }

  console.log(verificaIdadePessoas);
}

/*Imagine que em uma partida de RPG (Role-playing game) você deve jogar um dado de 20 lados (D20) para determinar a classe de um personagem, ou seja, de acordo com o número sorteado pelo dado uma classe será escolhida. Considere as regras a seguir:

Número menor que 4 = Guerreiro(a);
Número maior ou igual a 4 e menor que 8 = Ladino(a);
Número maior ou igual a 8 e menor que 12 = Curandeiro(a);
Número maior ou igual a 12 e menor que 16 = Arqueiro(a);
Número maior ou igual a 16 = Feiticeiro(a);
Crie um algoritmo que informa a classe escolhida de acordo com o número sorteado pelo dado de 20 lados e atribua o resultado na variável resultado.

Use condicionais para salvar a classe correta na variável classe;

A mensagem na variável resultado deve ser como essa: 'Sua classe é: Arqueiro(a)'.

Considere que as seguintes variáveis estão disponíveis (os valores abaixo são exemplos);

let dadoNumero = 16;
let classe = '';
let resultado = '';*/
/***** Não altere os códigos dentro desse bloco *****/
let dadoNumero = 16;
let classe = "";
let resultado;
/***** Não altere os códigos dentro desse bloco *****/

function ifElseExercise() {
  /***** Escreva seu if nas linhas abaixo *****/

  if (dadoNumero < 4) {
    classe = "Guerreiro(a)";
  } else if (dadoNumero >= 4 && dadoNumero < 8) {
    classe = "Ladino(a)";
  } else if (dadoNumero >= 8 && dadoNumero < 12) {
    classe = "Curandeiro(a)";
  } else if (dadoNumero >= 12 && dadoNumero < 16) {
    classe = "Arqueiro(a)";
  } else {
    classe = "Feiticeiro(a)";
  }

  resultado = `Sua classe é: ${classe}`;
  console.log(resultado);
}

/*Sua liderança queria presentear o time com camisetas e pediu que você fizesse o cálculo de quantas camisetas seriam necessárias. 
Seu time é composto por 5 pessoas, e sua liderança quer dar 4 camisetas para cada uma das pessoas e deixar 3 camisetas de reserva. 
Obedecendo à ordem de precedência, qual o resultado da seguinte operação: 3 + 4 * 5?*/
/*3 + 4 * 5 é igual a 23.*/

/*Jaqueline, Victor e Beatriz resolveram comprar 7 chocolates e 7 balas para dividir em 3. 
ual o resultado da seguinte operação: (7 + 7) % 3?
*/
/*Para calcular o módulo de 14 por 3, você divide 14 por 3 e obtém o resto da divisão:
14 ÷ 3 = 4 com um resto de 2*/

/*Você precisa criar um sistema de notas para uma escola, capaz de verificar qual foi a nota da pessoa estudante retornando os seguintes casos: 
- A, caso a nota seja maior ou igual a 8; - B, caso a nota seja maior ou igual a 6e menor que 8; - C, 
caso a nota seja menor que 6. Escolha a alternativa que contém a estrutura condicional correta:*/
if (nota > 8) {
  console.log("Nota A");
} else if (nota >= 6 && nota < 8) {
  console.log("Nota B");
} else {
  console.log("Nota C");
}

/*Utilizando o bloco de código abaixo, caso o nome seja igual a Link e a idade seja igual a 21, o que será exibido pelo console.log()?
 */
const nome = "Link";
const idade = 21;

if (nome === "Luigi" || idade < 21) {
  console.log("Olá, mundo!");
} else if (nome !== "Link" && idade === 22) {
  console.log("Eu sou o Link!");
} else if (nome === "Luigi" || idade !== 21) {
  console.log("Olá, mundo! Eu sou o Link!");
} else if (nome === "Link" && idade === "21") {
  console.log("Hello, world! I'm Link!");
} else if (nome === "Link" && idade === 21) {
  console.log("Eu sou o Link e tenho 21 anos!");
} else if (nome === "Link" && idade === 21) {
  console.log("Eu sou o Link e tenho 21 anos!");
}
/*Portanto, o console.log() exibirá a mensagem: "Eu sou o Link e tenho 21 anos!"*/
