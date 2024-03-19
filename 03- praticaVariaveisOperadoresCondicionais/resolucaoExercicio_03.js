/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto,considerando o preoço normal de etiqueta e a escolha da condição de pagamento.
Utilize os cógigos da tabeka a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código condição de pagamento:
- 1 À vista Débito, recebe 10% de desconto;
- 2 à vista no Dinheiro ou PIX, recebe 15% de desconto;
- 3 Em duas vezes, preço normal de etiqueta sem jurus;
- 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento === 1)
{
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}
else if (formaDePagamento === 2)
{
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}
else if (formaDePagamento === 3)
{
    console.log(precoEtiqueta);
}
else
{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}

