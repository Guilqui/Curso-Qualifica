let pessoa = '{"orelha" : 2, "pescoço" : true, "cabelo" : "possui"}';

let objeto = JSON.parse(pessoa);

console.log(objeto.cabelo);