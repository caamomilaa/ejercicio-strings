//Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else

const palabra = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
palabra('Pepe');

//Repite el ejercicio anterior pero con un operador ternario.

const palabra2 = word => {
  word.length > 5 ? console.log(word.toUpperCase()) : console.log(word.toLowerCase());
};
palabra2('Clotilde');

// Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const verbs = (verb1, verb2) => {
  if (verb1.endsWith('ar') && verb2.endsWith('ar')) {
    console.log(`El ${verb1} es de la primera conjugación y el ${verb2} es de la primera conjugación`);
  } else if (verb1.endsWith('er') && verb2.endsWith('er')) {
    console.log(`El ${verb1} es de la segunda conjugación y el ${verb2} es de la segunda conjugación`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('ir')) {
    console.log(`El ${verb1} es de la tercera conjugación y el ${verb2} es de la tercera conjugación`);
  } else if (verb1.endsWith('ar') && verb2.endsWith('er')) {
    console.log(`El ${verb1} es de la primera conjugación y el ${verb2} es de la segunda conjugación`);
  } else if (verb1.endsWith('ar') && verb2.endsWith('ir')) {
    console.log(`El ${verb1} es de la primera conjugación y el ${verb2} es de la tercera conjugación`);
  } else if (verb1.endsWith('er') && verb2.endsWith('ar')) {
    console.log(`El ${verb1} es de la segunda conjugación y el ${verb2} es de la primera conjugación`);
  } else if (verb1.endsWith('er') && verb2.endsWith('ir')) {
    console.log(`El ${verb1} es de la segunda conjugación y el ${verb2} es de la tercera conjugación`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('ar')) {
    console.log(`El ${verb1} es de la tercera conjugación y el ${verb2} es de la primera conjugación`);
  } else if (verb1.endsWith('ir') && verb2.endsWith('er')) {
    console.log(`El ${verb1} es de la tercera conjugación y el ${verb2} es de la segunda conjugación`);
  }
};
verbs('correr', 'andar');
//
const getConjugation = verb => {
  if (verb.endsWith('ar')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith('er')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith('ir')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
};

const twoVerbs = (verb1, verb2) => {
  const firstVerb = getConjugation(verb1);
  const secondVerb = getConjugation(verb2);
  console.log(`El ${firstVerb} y ${secondVerb}.`);
};
twoVerbs('coser', 'cantar');

// Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"

const extractTwoRandomLetters = word => {
  const randomNumberA = Math.floor(Math.random() * word.length);
  const randomLetterA = word.charAt(randomNumberA);
  const randomNumberB = Math.floor(Math.random() * word.length);
  const randomLetterB = word.charAt(randomNumberB);

  return randomLetterA + randomLetterB;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = extractTwoRandomLetters(wordA);
  const second = extractTwoRandomLetters(wordB);
  const third = extractTwoRandomLetters(wordC);
};
generateWord('Hola', 'Hola', 'Hola');
