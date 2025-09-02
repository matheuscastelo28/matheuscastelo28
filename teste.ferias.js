let estudosferias= "matheus está estudando nas férias";
console.log(estudosferias);

const estudos = " matheus está estudando";
if (" matheus está estudando" === estudos){
    console.log("matheus estudou nas ferias");
} else {
    console.log("matheus nao estudou nas ferias");
}

let nome = "Matheus castelo";
console.log(nome);

const horario = 8;
if (horario<=5){
    console.log("VOCE  CHEGOU ATRASADO");
} else {
    console.log("VOCE ESTA NO HORARIO");
}
let nome02 = "matheus";
let nome03 = " play futsal";
console.log(nome02 + nome03);

let quixada = "matheus";
console.log(quixada.length); 

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Matheus"); // Olá, Matheus!
saudacao("Ana");     // Olá, Ana!

let soma = 2 + 5; 
console.log(soma, soma * 3);

let usuario = "Matheus";
let anoAtual= 2025;
let anoNascimento = 2006;
let resultadoNascimento = 2025-2006;
    console.log(`Parabens ${usuario}, voce tem ${resultadoNascimento} anos`)

let numero = 2;
while (numero<8) {
    console.log("carregando...")
    numero++  
} 
 
 let numero02=2;
do {
    console.log("carregando02...")
    numero02++
} while (numero02<=8);{
    console.log("carregando02...")
}

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
let acertou = false;

// Enquanto não acertar...
while (!acertou) {
    // Aqui simulamos a tentativa, mas poderia ser com prompt() no navegador
    tentativa = Math.floor(Math.random() * 10) + 1; 
    console.log("Tentando:", tentativa);

    if (tentativa === numeroSecreto) {
        console.log("🎉 Acertou! O número era", numeroSecreto);
        acertou = true;
    } else {
        console.log("❌ Errou, tente de novo...");
    }
}

const contagem = [1, 2, 3, 4, 5, 6];
if (contagem == 1,2,3,4,5) {
    console.log("contagem fora de sequencia");
} else {
    console.log("A contagem está certa");
}
 

let numeri = 2;

do {
   console.log( numeri++);
 } while(numeri<=9);


