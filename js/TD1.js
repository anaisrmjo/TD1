// ex1.1
var nb_1 = 10;
var nb_2 = 20;
var result = nb_1 + nb_2;

function Add(){
	document.getElementById("result-exo-1-1").innerHTML = result ;
}

//ex1.2
var nb_3 = 10;
var nb_4 = 20;
var result1 = nb_3 * nb_4;

function Mul(){
	document.getElementById("result-exo-1-2").innerHTML = result1 ;
}

//ex1.3
var nb_5 = 12;
var nb_6 = 5;
var result2 = nb_5 % nb_6;

function Div(){
	document.getElementById("result-exo-1-3").innerHTML = result2 ;
}

//ex1.4
function Soustraction(){
var nb_7 = document.getElementById("ex1_input1").value;
var nb_8 = document.getElementById("ex1_input2").value;
var result3 = eval(nb_7 - nb_8);

	document.getElementById("ex1_result").innerHTML = result3 ;
}

//ex1.5
function Multiplier(){
var nb_8 = document.getElementById("ex2_input1").value;
var nb_9 = document.getElementById("ex2_input2").value;
var result4 = eval(nb_8 * nb_9);

	document.getElementById("ex2_result").innerHTML = result4 ;
}

//ex2.2
function Division(){
var nb_10 = document.getElementById("ex3_input1").value;
var nb_11 = document.getElementById("ex3_input2").value;
var result5 = eval(nb_10 / nb_11);

	document.getElementById("ex3_result").innerHTML = result5 ;
}

//ex2.2
function Addition(){
var nb_12 = document.getElementById("ex4_input1").value;
var nb_13 = document.getElementById("ex4_input2").value;
var result6 = eval(nb_12/1 + nb_13/1);

	document.getElementById("ex4_result").innerHTML = result6 ;
}

// ex 3
var nb1 = 82;
var nb2 = 8;
var ex3 = nb1 % nb2; 
document.getElementById("ex3_result").innerHTML = ex3;

// ex 4
var resultat = 0;
document.getElementById("ex6_result").innerHTML = resultat ;

function plusTen(){
var resultat1 = resultat += 10 ;
	document.getElementById("ex6_result").innerHTML = resultat1 ;
}

function diviseFive(){
var resultat2 = resultat / 5 ;
	document.getElementById("ex6_result").innerHTML = resultat2 ;
}

function multiplyHeight(){
var resultat3 = resultat * 8 ;
	document.getElementById("ex6_result").innerHTML = resultat3 ;
}

function minusTwo(){
var resultat4 = resultat - 2 ;
	document.getElementById("ex6_result").innerHTML = resultat4 ;
}

function combinePlusTenMinusTwo(){
var resultat4 = resultat += 10 - 2 ;
	document.getElementById("ex6_result").innerHTML = resultat4 ;
}

function reset(){
var resultat5 = resultat = 0 ;
	document.getElementById("ex6_result").innerHTML = resultat5 ;
}

// ex 5 
var nombreRandom = Math.floor(Math.random() * (1000 - 50) + 50);
document.getElementById("ex5_result").innerHTML = nombreRandom ;

// ex 6
function param(x) {
 var calc = x/2;
   alert(calc);
}

param (10);

// ex 7
function param2(x, y) {
 var calc2 = x - y;
    alert(calc2);
}

param2(10, 3);

// ex 8
	var entier1 = 14;
	var entier2 = 5;
	var entier3 = 3;
	var resultat7 = entier1 / entier2;
	var resultat8 = entier2 % resultat7;
	document.getElementById("ex8_result").innerHTML = resultat8 ;
   
 // ex9
function convertToPound(){
var nb14 = document.getElementById("ex9_input1").value;
var result9 = nb14 * 2.2046;

	document.getElementById("ex9_1_result").innerHTML = result9 ;
}

function convertToKg(){
var nb14 = document.getElementById("ex9_input2").value;
var result9 = nb14 / 2.2046;

	document.getElementById("ex9_2_result").innerHTML = result9 ;
}

//ex 10
function iterateWords(){

var input = ex10_result.innerHTML;
ex10_result.innerHTML = input + document.getElementById("ex10_input").value ;
}

function resetWords(){
	document.getElementById("ex10_result").innerHTML = '';
}

//ex 11

function benefices(){
	var benefice = document.getElementById("ex11_input").value - document.getElementById("ex11_random").value;
		document.getElementById("ex11_benef").innerHTML = benefice ;
	}
function cote(){
	var coterandom = Math.floor(Math.random() * (1000 - 50) + 50);
	document.getElementById("ex11_random").innerHTML = coterandom ;
}

//ex 13
 function resolution(){

  var w = window.innerWidth;
  var h = window.innerHeight;
  var txzt = "width=" + w + ", height=" + h;

document.getElementById('taille').innerHTML = txzt ;  

}
resolution();

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// ex15

function multiple (){
	var result = document.getElementById("ex15").value;
	if (result % 3 === 0) {
		console.log("Est un multiple de 3");
	}else if (result % 7 === 0) {
		console.log("Est un multiple de 7");
	}else if (result != 0) {
		console.log("N'est pas un multiple de 3 ou 7");
	}
}