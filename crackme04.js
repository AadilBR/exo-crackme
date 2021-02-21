// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '}}}}}}}}}}W'
// } = 125 et W = 87 donc 125 x 10 + 87 = 1337.
//il fallait donner une valeure numerique a tmp1 qui est égale a 1337
const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme4(password)