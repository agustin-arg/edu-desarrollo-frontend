'use strict';

function BinarioADecimal(num) {
      let decimal = 0;
      for (let i = 0; i < num.length; i++){
         if (num[i]== "1"){
            decimal += 2**(num.length - 1 - i);
         }
   }
   return decimal;
}

function DecimalABinario(num) {
   let binario = ""
    let i = 0;
    if (num == 1){
       return 1}
    else{  
        do {
          let resto = num % 2;
          num = num / 2;
          if (resto == 0){
             binario = "0" + binario;
          }
          else{
             binario = "1" + binario;
          }
       } while (num > 1 || num==1)}
    return binario
}
// function DecimalABinario(num) {
//    if (num === 0) return "0"; // Caso especial para el 0

//    let binario = "";

//    while (num > 0) {
//        binario = (num % 2) + binario; // Concatenar el resto al principio
//        num = Math.floor(num / 2); // Dividir por 2 y redondear hacia abajo
//    }

//    return binario;
// }


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
