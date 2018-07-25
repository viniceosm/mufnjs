var nomes = ['vinicius', 'maria', 'vinicius'];

console.log(verRepeticao(nomes));

function verRepeticao(arr) {
    var valorRepeticaoIndex = [];
    var valorRepeticao = [];

    arr.forEach(valorVerificar => {
        var i = valorRepeticaoIndex.findIndex(v => v == valorVerificar);

        if (i == -1) {
            valorRepeticaoIndex.push(valorVerificar);
            i = valorRepeticaoIndex.length - 1;
        }

        var q = ((valorRepeticao[i] != undefined) ? (valorRepeticao[i].q + 1) : 0);
        valorRepeticao[i] = { valorVerificar, q };
    });

    return valorRepeticao;
}