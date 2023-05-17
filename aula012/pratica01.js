var idade = 46

console.log(`sua idade é de ${idade} anos`)

if(idade < 18){
    console.log("criança")
}else if(idade >= 18 && idade <= 30){
    console.log("jovem")
}else if (idade >=31 && idade <=45){
    console.log("adulto")
}else{
    console.log("idoso")
}