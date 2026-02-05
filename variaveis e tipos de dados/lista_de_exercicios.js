//1. Boas-vindas personalizadas
//Crie uma variável chamada nome e atribua seu nome completo.
// Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
let nome = 'Viktor Ferreira'
console.log("Olá,", nome, "! Seja bem-vindo ao curso de JavaScript")

//2. Cálculo de idade
//Crie duas variáveis: anoAtual e anoNascimento. 
//Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."
let anoAtual = 2026
let anoNascimento = 1998
console.log("Você tem", anoAtual - anoNascimento, "anos")

//3. Mensagem de localização
//Crie três variáveis com os dados da sua localização: cidade, estado e pais. 
//Em seguida, mostre no console: "Você está em Cidade - Estado, País."
let cidade = "São Carlos"
let estado = "São Paulo"
let pais = 'Brasil'
console.log('Você está em:', cidade, '-', estado,pais)

//4. Tipo da variável:
//Crie uma variável chamada temCarteira com valor true ou false. 
//Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
let temCarteira = false
console.log(typeof temCarteira)

//5. Simulação bancária simples:
//Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50.
//Mostre o saldo final no console com uma frase explicando.
let saldo = 0
saldo+=200
saldo-=50
console.log("Saldo após depósito e saque: ", saldo)

//6. Média de notas:
//Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. 
//Calcule e mostre a média final com uma mensagem.
let matematica = 6
let portugues = 8
let ciencias = 10
let media = (matematica + portugues + ciencias)/3
console.log("Media final: ", media)

//7. Reajuste de salário:
//Crie uma variável chamada salario com valor 3000. 
// Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000
let aumento = 0.1 // 10% de aumento no salario
let salarioReajustado = salario * (1 + aumento)
console.log("O novo salário com reajuste é de:", salarioReajustado)

//8. Contador de cliques:
//Simule um contador de cliques em um botão. 
//Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.
let clique = 0
//click
clique = 1
//click
clique = 2
console.log(clique)

//9. Constantes não podem ser alteradas
//Crie uma constante chamada PI com o valor 3.14. 
//Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.
const pi = 3.14
//pi = 3.14159 // O erro acontece porque uma constante não pode ser alterada

//10. Concatenando tipos diferentes
//Crie uma variável mensagem contendo uma string e outra numero contendo um número. 
//Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.
let numeroString = "1"
let numeroNumero = 1
let numeroConcatenado = numeroNumero + numeroString
console.log("numeroConcatenado: ", numeroConcatenado)
console.log("tipo do numeroconcatenado: ", typeof numeroConcatenado)