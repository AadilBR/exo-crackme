// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '4321drowssap'
// il fallait decomposer le mdp 
//puis inverser l'ordre des caracteres
//et enfin le recomposer suivant le nouvel ordre
const crackme5 = (password) => {
  if (password.split('').reverse().join('') === 'password1234') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme5(password)