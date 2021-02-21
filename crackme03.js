// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@az!rtyuiopqsd'
// ici les trois boolean doivent être true
//longueur doit password doit être de 14 caractères
//l'index [0] doit être un '@' comprendre première position
//l'index [3] doit être un '!' comprendre quatrième position
const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme3(password)