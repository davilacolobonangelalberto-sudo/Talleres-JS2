const nota = 85;
let calificacion;

if (nota >= 90 && nota <= 100) {
    calificacion = "Sobresaliente";
} else if (nota >= 80 && nota <= 89) {
    calificacion = "Notable";
} else if (nota >= 70 && nota <= 79) {
    calificacion = "Aprobado";
} else if (nota >= 0 && nota <= 69) {
    calificacion = "No aprobado";
} else {
    calificacion = "Nota inválida";
}

console.log(`Calificación: ${calificacion}`);

// Operador ternario
const resultado = nota >= 70 && nota <= 100 ? "Aprobó" : "No aprobó";

console.log(`Resultado: ${resultado}`);