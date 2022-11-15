console.log("ejercicio1");
console.log("iniciado");

console.log("ejercicio2");
console.log("empezamos con JS");

console.log("ejercicio3");
console.log("hola soy un estudiante de hackademy");

console.log("ejercicio4");
let saludo = "hola, buenos dias";
console.log("saludo");
saludo = "buenos dias que tal";
console.log("bien");

console.log("ejercicio5");
let cuestion = "¿como estas?";
let pregunta = "¿como te llamas?";
console.log(cuestion + pregunta);

console.log("ejercicio6");
let variableString = "soy un string";
let variableNumero = 7;
let variableBoolean = true;

console.log("ejercicio7");
let num = 5;
console.log(num * 2);

console.log("ejercicio8");
let variable1 = "carlos";
let variable2 = "hernandez";
variable3 = variable1 + variable2;
console.log(variable3);

console.log("ejercicio9");
let variableNum = 5;
console.log(variableNum);
num = String (variableNum);
console.log(variableNum);

console.log("ejercicio10");
let variableNumDecimal = 7.010749;
variableNumDecimal = String (variableNumDecimal - 0.000749);
console.log(variableNumDecimal);

console.log("ejercicio11");
let cadena1 = "ejercicio";
let cadena2 = "javascript";
let resultado = cadena1 + cadena2;
console.log(resultado.length);

console.log("ejercicio12");
let numero = 19;
console.log(`tengo ${numero} años`);

console.log("ejercicio13");
let a = 10;
let b = 1;
console.log(10 + "1");
console.log(10 - "1");

console.log("ejercicio14");
let palabra = "Hey tu! Como te llamas? Hey tu estoy hablando contigo";
let palabra2 = palabra.replace ("contigo" , "yo");
console.log(palabra2);


console.log("ejercicio15");
let numeros = prompt ("escribe un numero");
if (numeros > 100){
    console.log("SI es mayor que 100");
}
if (numeros < 100){
    console.log("NO es menor que 100");
}


console.log("ejercicio16");
let variablePositiva = prompt ("introduzca numeros");
if (variablePositiva > 0){
    alert ("el numero ingresado tiene un valor positivo")
    console.log("el numero ingresado tiene un valor positivo");
} else {
    alert ("el numero ingresado tiene un valor negativo")
    console.log("el numero ingresado tiene un valor negativo");
}


console.log("ejercicio17");
let number1 = Number(prompt("escribe un numero"));
let number2 = Number(prompt("escriba un segundo numero"));
let number3 = number1 + number2;
if (number3 > 50){
    console.log(number3 * 2);
}else{
    console.log(number3 * 3);
}


console.log("ejercicio18");
let number = Number(prompt("escribe un numero para saber si es multiplo de 3 o de 8"));
if (number % 3 == 0){
    alert ("tu numero es multiplo de 3")
}else if (number % 8 == 0){
    alert("tu numero es multiplo de 8")
}else {
    alert ("este numero no es multiplo de 3 ni de 8")
}

console.log("ejercicio19");
let trabajo = prompt ("Trabajas hoy?");
if (trabajo == "no"){
    let buen_tiempo = prompt("Hace buen tiempo hoy?")
    if (buen_tiempo == "si"){
        alert("Vale, podemos ir a la playa")
    }
}else{
    alert("Lo siento pero tenemos que trabajar")
}


console.log("ejercicio20");
for (let i = 1; i <=20; i++) {
    if (i <= 20){
        let respuesta = i - 5;
        console.log(`el numero de restarle a ${i} es ${respuesta}`);
    }else if (i > 20){
        console.log(`el numero ${i} al ser mayor de 20 no se le suma nada`);
    }
}

console.log("ejercicio21");
let nu = 0;
for (let i = 1; i <= 20; i++){
    nu += i
}
console.log(`La suma de los 20 primeros numeros es ${nu}`);



console.log("ejercicio22");
let numer = Number (prompt("Ingresa un numero"));
let sumaa = 0 
for (let i = 1; i <= numer ; i++) {
    console.log(sumaa)
    sumaa = sumaa + i
}
console.log(` el resultado de todos los ${numer} es: ${sumaa}`);



console.log("ejercicio23");
let numbers = Number(prompt("Inserta un numero"));
let total = 1;
if (!Number .isNaN(numbers)){
    for (let i = 1; i <= numbers; i++) {
        console.log(total = total * i);
   
    }
}else{
    console.log("Error");
}
console.log(typeof (numbers));


console.log("ejercicio24");
let min = 1;
let max = 10;
function aleatorio() {
    return alert (Math.floor (Math.random() * (min - max + 1)) + min)
}
aleatorio()



console.log("ejercicio25");
let servicio = prompt (`Describe que tal el servicio: fatal, ok, bueno, excelente`);
function tipCalculator(){
    switch (servicio){
        case `fatal` :
            return (`${5} % de propina`)
            break;
        case `ok` :
            return (`${15} % de propina`)
            break;
        case `bueno` :
            return (`${20} % de propina`)
            break;
        case `excelente` :
            return (`${30} % de propina`)
            break;
        default :
            return (`${18} % de la propina`)
            }
}

tipCalculator()



console.log("ejercicio26");
let losMultiplos = Number(prompt ("Escribe un numero del 1 al 100"));
function multiplos (){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0){
            console.log("java");
        }else if (i % 5 == 0){
            console.log("script");
        }else if (i % 15 == 0){
            console.log("javascript");
        }
    }
}

multiplos ()



console.log("ejercicio27");
let ingresa = Number (prompt("Escribe un numero"));
function parImpar (){
    if (parImpar % 2 == 0){
        alert("Tu numero es par")
    }else {
        alert ("Tu numero es impar")
    }
}

parImpar()


console.log("ejercicio28");
let nume = 0;
function excluyendoPares (){
    while (nume < 10){
        nume ++
        if (nume % 2 == 0){
            console.log("Numeros pares excluidos");
         }else {
            console.log(nume);
         }
    }
}

excluyendoPares()


console.log("ejercicio29");
let cuadrado;
let rectangulo;
function poligono (cuadrado , rectangulo){
    if (cuadrado == rectangulo){
        let areaCuadrado = cuadrado + rectangulo;
        console.log(`El area del poligono es ${areaCuadrado}`);
    }else {
        let perimetroRectangulo = cuadrado - rectangulo;
        console.log(`el area del poligono es ${primetroRectangulo}`);
    }
}

poligono (4 , 4)


console.log("ejercicio30");
function areaCirculo(r){
    return Math.floor(Math.PI * Math.pow(r , 2));
}
for (let i = 1; i <= 10; i++) {
    console.log(`el area del ciruclo con radio ${i} es: ${areaCirculo(i)}`);
}

console.log("ejercicio31");
function capitalize (){
    console.log("simon");
}
capitalize();
let nuevoCapitalize = function(){
    console.log("Simon");
}
nuevoCapitalize();


console.log("ejercicio32");
let fibonacci = [1 , 2]
console.log(fibonacci);
function fibonacci2 (){
    for (let i = 2; i <= 34; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }
    console.log(fibonacci);
}
fibonacci2()


console.log("ejercicio33");
const numeross = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = [];
for (let i = 0; i < numeross.length; i++) {
    if (((numeross [i]) % 2) == 0){
        numerosPares.push(numeross[i])
    }
}
console.log(numerosPares);


console.log("ejercicio34");
const dias = [`lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`];
let diasM = dias.filter (m => m.indexOf (`m`) === 0)
console.log(diasM);


console.log("ejercicio35");
let nummero = [100, 2, 20, 35, 4, 44];
nummero.sort (function (a , b) {return a-b});
console.log(nummero);
result = nummero.filter((n) => n < 10)
console.log(result);


console.log("ejercicio36");
let dosEdadesMasAltas = ([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19])
dosEdadesMasAltas.sort(function (a , b) {return a-b});
console.log(dosEdadesMasAltas);
console.log(dosEdadesMasAltas [dosEdadesMasAltas.length - 2], (dosEdadesMasAltas [dosEdadesMasAltas.length - 1]));


console.log("ejercicio37");
let pow = [2, 4, 25]
let nuevoPow = pow.map (n => Math.pow (n, 3))
console.log(nuevoPow);


console.log("ejercicio38");
const dia = [`lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`];
const resultados = dias.map((value) => value.charAt(0) + value.charAt(1) + value.charAt(2));
console.log(resultados);


console.log("ejercicio39");
const numeroos = [1 , 2 , 3]
let devolverSuma = numeroos.reduce ((a, b) => a + b);
console.log(devolverSuma);