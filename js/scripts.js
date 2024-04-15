// Aqui esta como você pode interpretar essa expressão regular;

// ^ - Representa o inicio da String
// [0-9]- Representa qualquer digito numerico de 0 a 9.
// + - indica que o digito numerico de 0 a 9.
// + - indica que o digito pode ocorrer uma ou mais vezes.
// $ - Representa o final da String.

//01 - Exemplo
// const regex = /^\d+$/;

// const string1 = "12345";
// const string2 = "abc123";
// const string3 = "987654321";

// console.log(regex.test(string1)); //true
// console.log(regex.test(string2)); //false
// console.log(regex.test(string3)); //true


// 02- Exemplo
// const regex = /^[A - Za-z]+$/;
// console.log(regex.test("abcd"));// true
// console.log(regex.test("abc123")); //false


// //03 - Email
// const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// console.log(regex.test("test@exemple.com")); //true
// console.log(regex.test("invalid_email"));//false


// const regex = /\d+/g;
// const string = "Eu tenho 3 maças e 5 laranjas.";
// const numeros = string.match(regex);
// console.log(numeros); //["3", "5"]

const regex = /^

// Exibir resultado 
if(ehValido){
    console.log("O numero de celular é valido");

}else {
     console.log("o numero de ceular é invalido");
}