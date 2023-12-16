let spaceship = prompt("Digite o nome da nave")

let caractere =prompt("Qual caractere você quer substituir?")

let subscaractere = prompt("Por qual caracter você deseja substituir?")

let newspaceship = ""

for (let pos = 0; pos < spaceship.length; pos++) {
    if(spaceship[pos] == caractere) {
        newspaceship += subscaractere
    } else {
        newspaceship += spaceship[pos]
    }
}

alert("O nome da nave é : "+ newspaceship)



