let nome = 'Lucas' 
console.log(nome) // QUESTÃO 1 Aqui criei uma variável nome recebendo meu nome e depois pedi para ser mostrada no console usando o console.log.

let idade = 25;
let altura = 1.75;
console.log(idade)
console.log(altura) // QUESTÃO 2 Aqui foi criada duas variáveis, nome e altura, recebendo os valores pedidos e depois mostrando-os no console.

let preco = 50;
let desconto = 0.2;
let precoComDesconto = preco - (preco * desconto); // QUESTÃO 3 criei as variaveis pedidas e uma variável para o calculo onde, para calcular descontos primeiro multipliquei o preço (50) pela porcentagem de desconto(0.2 ou 20%) para descobrir o valor do desconto, depois apenas subtrai essa valor do preço original e mostrei no console
console.log(precoComDesconto);

let temperatura = 30;
if (temperatura > 25) {
    console.log('Está calor!');
} else {
    console.log('Está fresco!');
} // QUESTÃO 4-aqui foi criada uma variável temperatura com a condição de se a temperatura for maior que 25, irá ser mostrado 'está calor' se não for será mostrado 'está fresco'. usei as condicionais if else aprendidas no curso.

//QUESTÃO 5 - aqui utilizarei a variável idade já pedida na questão 2 para fazer a questão 5 e evitar duas variavés idênticas no mesmo código.
if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
} //continuação questão 5 utilizei as  condicionais novamente, onde se a idade for maior ou igual a 18 irá ser mostrado "você é maior de idade" e, caso contrário "você é menor de idade", no console.

let nota = 4;
if (nota >= 7) {
    console.log('Aprovado');
} else if(nota >=5 && nota <= 6) { //QUESTÃO 6 - observação para o comando && (and), onde assim como os vários comandos em JS, ajuda muito sabendo ao menos o básico do inglês para produzir códigos, com ele consigo fazer comparações com mais de uma condicional na mesma linha.
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}//continuação questão 6 aqui foi criada a variável nota onde atribui o valor 4 e utilizei as condicionais para realizar o que foi pedido, onde, se a nota for maior ou igual a 7 será mostrado "Aprovado" como saída no console, se não, se a nota for maior que 5 ou igual a 5, e menor que 6 ou igual a 6 irá mostrar "recuperação" se não, irá mostrar 'reprovado'

let numero1 = 8;
let numero2 = 16;
if (numero1 === numero2) {// QUESTÃO 7 -fui dar uma olhada em alguns artigos sobre JS sobre atribuições e achei interessante usar o === "exatamente igual" quando quero trabalhar só com números, já que essa função faz com que diferencie a tipagem e não confunda numeros com strings por exemplo.
    console.log('Os números são iguais');
} else {
    console.log('Os números são diferentes');//de forma geral aqui foi criado um programa com duas variaveis que irão receber numeros, onde se ambos os números forem exatamente iguais, irá mostrar a mensagem trazendo esta informação, caso contrário irá aparecer uma mensagem no console informando que são diferentes.
}

// QUESTÃO 8 - na questão 1 já foi criada  a variável nome (linha 1) e na questão 2 a variável idade (linha 4), então para a questão 8 irei apenas exibir a mensagem pedida utilizando concatenação.
console.log(`Olá meu nome é ${nome} e eu tenho ${idade} anos de idade`); // sei que eu poderia usar a concatenação com '' e +, mas achei essa outra forma melhor.

let contador = 1;//  QUESTÃO 9 - aqui foi utlizado uma nova condição o loop while 'enquanto' para fazermos uma contagem até 10 no console.
while (contador <= 10) {
    console.log(contador);
    contador++;
} //fiz a variável contador recebendo o valor 1 que é o início da nossa contagem, e a condicional onde, enquanto (while), o valor do contador for menor ou igual a 10 eu vou querer que incremente (++) mais uma unidade no valor do contador fazendo um loop até chegar na condição colocada.

let numero5 = Number(prompt('Digite um número por favor'));
while (numero5 != 5) {
    alert(numero5);
    numero5 = Number(prompt ('Digite outro número por favor'));
}//QUESTÃO 10 - aqui teremos uma interação com o usuário então usei o prompt, como eu quero que o usuário digite apenas números eu irei usar o comando Number antes do prompt, garantindo que não receba uma string do usuário por exemplo.
//após isso irá aparecer uma mensagem para que ele digite um valor, só que meu objetivo é que ele digite o número 5, uso então a condição (while) onde, enquanto o número digitado pelo usuário for diferente de 5, apareça uma mensagem com o valor que ele digitou e em seguida outra para ele digitar outro número. Quando o usuário digitar 5 o loop acaba.

let tabuadaDo7 = 7;
let contador2 = 1;
while (contador2 <= 10) {
    console.log(`${tabuadaDo7} x ${contador2} = ${tabuadaDo7 * contador2}`);
    contador2++
}// QUESTÃO 11 - aqui foi feito mais um loop com while para mostrar a tabuada do 7 no console, nesse caso preciso de duas variavéis para realizar as multiplicações, uma com o valor do 7 e outra com o valor de 1 que será multiplicado depois.
// após isso, já que quero a tabuada do 7 de 1 a 10, minha condição vai ser que, enquanto a minha variavél que recebeu 1 (contador2), for menor ou igual a variavél tabuadaDo7 que recebe 7,
// irá mostrar no meu console os números que irei multiplicar das duas variavéis sendo igual a multiplicação de ambas.
//Mas como o valor das duas estão fixos, eu só conseguiria o resultado de 7 x 1 = 7, então uso o incremento no contador para aumentar uma unidade do seu valor até chegar na minha condição While.

let numeroPar = 0;
while (numeroPar <= 20) {
    (numeroPar)
    console.log(numeroPar)
    numeroPar = numeroPar + 2
}
//QUESTÃO 12 - aqui o objetivo é mostrar os números pares de 0 à 20 no console, para isso criei uma variavél chamada numeroPar que irá receber 0, primeiro número par da contagem e depois vou criar uma condição while.
// na condição vou declarar que enquanto o número par for menor ou igual a 20, irá ser mostrado no console a soma do número par + 2 unidades, já que todo número par pode ser multiplicado por 2.

function CalcularAreaDoCirculo (raio) {
    let formulaAreaDoCirculo = Math.PI * (raio*raio);
    return formulaAreaDoCirculo;
}
console.log(CalcularAreaDoCirculo(18));
//QUESTÃO 13 - aqui foi feita uma função para calcular a área do círculo, assim como diz no enuciado o raio foi colocado como parametro o raio e para retornar a área do circulo irei utilizar a formula do cálculo elaborado para isso, que seria a área igual a PI vezes o raio ao quadrado.
//de acordo com algumas pesquisas na internet, para representar o PI no JS consigo usar o comando Math.PI que representa com precisão seu valor. então usei o Math.PI e multipliquei o raio por ele mesmo dentro da função.
// Por fim depois de colocar o raio desejado para o calculo quero que a função retorne o resultado do calculo, então usarei o return, para chamar a função e mostrar no meu console uso console.log o nome da função e o raio do circulo qie eu quero, então ele me mostra sua área no console.

let somaNumero1 = 26;
let somaNumero2 = 54;
console.log(somaNumero1 + somaNumero2);
// QUESTÃO 14 aqui como pedido fiz duas variáveis uma recebendo um valor e realizei a soma dos dois com o resultado no console.

function SomarDoisNumeros(numeroUm, numeroDois){
    let resultadoDaSoma = numeroUm + numeroDois;
    return resultadoDaSoma;
} 
console.log(SomarDoisNumeros(10,20));
// QUESTÃO 15 - para refatorar e deixar o código apresentado na questão 5, criei uma função simples onde ela vai receber dois numeros como parametro e depois somar ambos por meio da variável resultadoDaSoma
// depois usei o return para o resultado, depois disso só chamei a função no console para ver se estava funcionando
