// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'bonj42r'

/* il fallait trouver un mdp avec une string de minimum 4 caracteres pour pouvoir avoir apres traitement des methodes 
.split('').slice(-3, -1).join('') avoir la valeur nombre 42
  */
const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)