let $input_quantidade = document.querySelector("#qtd")
let $output_quantidade = document.querySelector("#total")

//Função anônima resposável pela a soma do valor total a ser pago na compra
$input_quantidade.oninput = function() {
    let preco = document.querySelector("#preco").textContent
    preco = preco.replace("R$ ", "")
    preco = preco.replace(",", ".") // Trocando a Vírgula por ponto para que o JS possa fazer a operação
    preco = parseFloat(preco)

    let quantidade = $input_quantidade.value
    let total = quantidade * preco 
    total = "R$ " + total.toFixed(2)
    total = total.replace(".", ",") //trocando o ponto por vírgula para ser exibido para o cliente no checkout

    $output_total.value  = total
}