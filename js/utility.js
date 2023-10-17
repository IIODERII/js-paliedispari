function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function isPalindroma(parola){
    return (reversedWord(parola).toLowerCase() === parola.toLowerCase()) ? true : false;
}

function reversedWord(parola) {
    let reversed = '' ;
    for(let i = parola.length - 1 ; i >= 0 ; i--){
        reversed += parola[i];
    }
    return reversed
}