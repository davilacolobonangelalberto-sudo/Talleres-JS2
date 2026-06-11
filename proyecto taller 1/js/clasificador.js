// Área de un triángulo
const base = 10;
const altura = 6;
const areaTriangulo = (base * altura) / 2;

// Área de un círculo
const radio = 5;
const areaCirculo = Math.PI * radio ** 2;

// Volumen de un cubo
const lado = 4;
const volumenCubo = lado ** 3;

// Mostrar resultados
console.log(`Área del triángulo: ${areaTriangulo}`);
console.log(`Área del círculo: ${areaCirculo.toFixed(2)}`);
console.log(`Volumen del cubo: ${volumenCubo}`);

const edad = 20;
const tieneEntrada = true;
const esVip = true;

// Reglas
const puedeEntrar = edad >= 18 && tieneEntrada;
const accesoVip = puedeEntrar && esVip;
const esMenor = !(edad >= 18);

// Mostrar resultados
console.log(`¿Puede entrar?: ${puedeEntrar}`);
console.log(`¿Tiene acceso VIP?: ${accesoVip}`);
console.log(`¿Es menor de edad?: ${esMenor}`);