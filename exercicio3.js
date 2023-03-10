import fileFetch from "file-fetch";

let media = 0;
let soma = 0;
let result = 0;
let dataArray = [];
let fatuOver = [];
let daysOver = 0;
let maxNumber = 0;
let minNumber = 0;

fileFetch('./public/dados.json')
    .then(res => res.json())
    .then(data => faturamento(data))
    .catch(e => console.log(e));

function faturamento(data) {
    if(data){
        for ( let day in data) {
            let {valor} = data[day];
            if (valor !== 0) {
                soma += valor;
                dataArray.push(valor);
            }
            
            media = soma / dataArray.length;
            result = media.toFixed(2);

            if (valor > result) {
                fatuOver.push(valor);
                daysOver = fatuOver.length
            }
            maxNumber = Math.max(...dataArray);
            minNumber = Math.min(...dataArray);
        }
        return console.log(`O menor valor de faturamento ocorrido foi ${minNumber},
        enquanto o maior foi ${maxNumber}. Sendo ${daysOver} o número de dias acima da média`);
    }
}
faturamento();
