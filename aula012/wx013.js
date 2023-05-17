var agora = new Date()
var diasemana = agora.getDate()

/* 0 domingo
1 segunda
2 terça
 3 quarta
 4quinta
 5 sexta
 6 sabado
*/
console.log(diasemana)

switch(diasemana){
    case 0 :
        console.log("Domingo")
        break
    case 1 :
        console.log("Segunda")
        break
    case 2 :
        console.log("Terça")
        break
    case 3 :
        console.log("Quarta")
        break
    case 4 :
        console.log("Quinta")
        break
    case 5 :
        console.log("Sextou")
        break
    case 6 :
        console.log("sabado")
        break
    default :
        console.log("[erro] dia invaçido !!")
        break

}