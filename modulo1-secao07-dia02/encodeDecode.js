// encodeDecode.js
const mapString = (objEncodeOuDecode, string) => {
    const splitString = string.split('');
    const resArray = [];
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const value = objEncodeOuDecode[character]; // considera que a chave do objeto é = ao caracter[index] da string. Se não for, o value = undefined. Se for, o if vai dar push no VALOR da chave dentro array
      
      if (value) {
        resArray.push(value);
      } else {
        resArray.push(character);
      }
    }
    return resArray.join('');
  }
  const encode = (string) => {
    const vogais = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    return mapString(vogais, string); // retorna o retorno da mapString (return mappedArray.join(''))
  }

  const decode = (string) => {
    const numeros = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    return mapString(numeros, string); // retorna o retorno da mapString (return mappedArray.join(''))
  }

  console.log(encode('ana')); 
  console.log(decode('1n1')); 

  // const functions = { encode, decode };
  // module.exports = functions;