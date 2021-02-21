// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '1a2b!azertyuio'
/* ici le mdp doit respecter 6 conditions 
1 à l'index 0
a à l'index 1
2 à l'index 2
b à l'index 3
! à l'index 4
etre composé d'une string de plus de 13 caractères*/

const crackme6 = (password) => {
  if (password[0] === '1') {
    if (password[1] === 'a') {
      if (password[2] === '2') {
        if (password[3] === 'b') {
          if (password[4] === '!' && password.length > 13) {
            console.log('OK')
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme6(password)