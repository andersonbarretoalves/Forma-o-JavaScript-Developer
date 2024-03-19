/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto,considerando o preoço normal de etiqueta e a escolha da condição de pagamento.
Utilize os cógigos da tabeka a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
- 1 À vista Débito, recebe 10% de desconto;
- 2 à vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 Em duas vezes, preço normal de etiqueta sem jurus;
- 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100
const percentualDez = (10 / precoEtiqueta) * 100;
const percentualQuinze = (15 / precoEtiqueta) * 100;

pagamentoDebito = precoEtiqueta - percentualDez;
pagamentoDinheiroPix = precoEtiqueta - percentualQuinze;
pagamentoParceladoJuros = precoEtiqueta + percentualDez;

formaDePagamento = 5

if (formaDePagamento === 1)
{
    console.log('Preço no Débito: R$ ' + pagamentoDebito);
}
else if (formaDePagamento === 2)
{
    console.log('Preço no Dinheiro ou Pix: R$ ' + pagamentoDinheiroPix);
}
else if  (formaDePagamento === 3)
{
    console.log('Preço em até 2 vezes: R$ ' + precoEtiqueta);
}
else if (formaDePagamento === 4)
{
    console.log('Preço parcelado acima de 2 vezes: R$ ' + pagamentoParceladoJuros);
}
else
{
    console.log('Erro: Opção inválido, Favor escolher uma opção de 1 à 4!');
}