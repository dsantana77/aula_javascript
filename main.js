
// var nome = "Daniel Santana";
// var idade = 44;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo"

// alert("meu primeiro JS");

// alert("Bem Vindo " + nome);

// alert(nome +" tem "+ idade);

// alert(idade + idade2)


// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase())

// var n1 = 5
// var n2 = 3

// console.log(n1 * n2);
// console.log(n1 * idade)

// var lista = ["maça", "pera", "laranja"]
// console.log(lista[1]);
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista)
// console.log(lista.length)
// console.log(lista.reverse())
// lista.push("uva");
// console.log(lista[0])
// console.log(lista.toString())
// console.log(lista.toString()[0])
// console.log(lista.join(" | "))

// var fruta =  {nome:"maça", cor:"vermelho"}
// console.log(fruta);
// alert(fruta.cor)

// var frutas =  [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxo"}]
// console.log(frutas);
// alert(frutas[1].cor);

// var idade = prompt("Qual sua idade?")
// // var idade = 18;
// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade")
// }

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     // count = count + 1;
//     count++
//     alert(count);
// };

// var count;
// for(count=0; count <=5; count++){
//     alert(count);
// };

// var d = new Date
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d);
// alert(d.getFullYear())

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// alert(soma(5, 20));
// alert(setReplace("vai Japão", "Japão", "Brasil"))

// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar=true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua Idade?")
// console.log(validaIdade(idade))

// function botao(){
//     alert("Obrigado por clicar")
// }
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
window.open("https://globallabs.academy/");
// window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    // alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}