//Esta linha seleciona o elemento HTML com o ID 'calculete' e adiciona um ouvite de elemento de clipe (click)
document.getElementById('calculate').addEventListener('click',function(){

    //Esta linha obtem o valor digitando no elemento HTML com o ID 'value' e armazena na variedade'value'
    const value= document.getElementById('value').value;

    //Esta linha obtém o valor digitando no elemento HTML com o ID 'fee' e o divide por 100 para obter uma taxa 
    //O resultado é armazenado na variavel 'fee'.
    const fee = (document.getElementById('fee').value) / 100;

    //Esta linha obtém o valor digitado no elemento HTML com ID 'time' e armazena na variedade 'time'.
    const time = document.getElementById('time').value;

    //Esta linha calcula o total com base nos valores obtidos anteriormente . O cálculo é realizado usando a 
    // fórmula de juros composto .
    const total = value * (1+ fee)**time;

    //Esta linha atualiza o conteudo do elemento HTML com o ID 'total' para mostrar o resultado formado
    //como uma string no formato"R$ X,XX".
    document.getElementById('total').innerHTML = ("R$ " +total.toFixed(2).replace('.','.'));
});
