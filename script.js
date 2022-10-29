/* Faça um algoritmo que lê um valor inteiro de reais e calcula o menor valor possível de
notas de 100, 50, 10, 5 e 1 que o valor lido pode ser decomposto. Exiba o valor lido e a
decomposição. Ex.: 576 // 5 nota(s) de 100 1 nota(s) de 50 2 notas(s) de 10 1
nota(s) de 5 1 nota(s) de 1 */




var valor
var nota100
var nota50
var nota10
var nota5
var moeda1

valor = prompt("insira o valor desejado")

nota100 = Math.floor(valor/100)
valor = valor - nota100*100

nota50 = Math.floor(valor/50)
valor = valor - nota50*50

nota10 = Math.floor(valor/10)
valor = valor - nota10*10

nota5 = Math.floor(valor/5)
valor = valor - nota5*5

moeda1 = valor
console.log("Voce recebera", nota100, "notas de R$100", nota50, "notas de 50 reais", nota10, "notas de R$10", nota5, "notas de R$5", moeda1, "moedas de R$1")