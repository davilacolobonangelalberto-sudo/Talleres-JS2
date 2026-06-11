let saldo=1000000;
let retiro =1000000;
if (reitro > saldo) {
    console.log("fondos insuficientes");
} else if (retiro <= 0){
    console.log("monto invalido");
} else if(retiro % 10000 == 0 ){
    saldo = saldo - retiro;
    console.log('retiro exitoso');
    console.log('el nuevo saldo es:<${saldo}');
} else (console.log("solo se permiten retiros multiplos de 10.000"))