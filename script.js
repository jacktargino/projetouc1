function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;

    console.log(valor);
    console.log(moeda);

    fetch(`https://open.er-api.com/v6/latest/${moeda}`)
    .then(
        function (resposta) {
            return resposta.json();
        }
    )
    .then(
        function (resposta) {
            let resultado = valor / resposta.rates.BRL;
            console.log(resposta.rates.BRL);

        document.getElementById('resultado').style.display = 'block'; // mostra o resultado
        document.getElementById('resultado').innerText = 
        `R$ ${valor.toFixed(2)} = ${resultado.toFixed(2)} ${moeda}`;

        }
    )
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
}