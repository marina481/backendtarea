function suma(a, b) {
    return a + b;
}


function calcularAreaCuadrado(lado) {
    return lado * lado;
}

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

const autosuma = function(numeros) {
    let total = 0;
    numeros.forEach(numero => {
        total += numero;
    });
    return total;
}

const calcularEdad = (nombre, nacimiento) => {
    const edad = new Date().getFullYear() - nacimiento;
    return `Hola ${nombre}, este año tenes o cumplis ${edad} años.`;
}

const inscribirAlumno = function(alumnos, nombre) {
    alumnos.push(nombre);
}

function buscador(alumnos, nombre) {
    return alumnos.includes(nombre) ? "Alumno encontrado" : "Alumno no encontrado";
}


function Calculadora(numeros, operacion) {
    return operacion(numeros);
}

// Suma
const sumar = (numeros) => numeros.reduce((acc, num) => acc + num, 0);

// Resta
const restar = (numeros) => numeros.reduce((acc, num) => acc - num);

// Multiplicación
const multiplicar = (numeros) => numeros.reduce((acc, num) => acc * num, 1);

function agregarSiEstaEntreCeroYDiez(numero, array) {
    if (numero >= 0 && numero <= 10) {
        array.unshift(numero);
    } else {
        throw new Error("Número fuera de rango");
    }
    return array;
}

function agregarNumerosEntreCeroYDiez(numeros) {
    return numeros.filter(numero => numero >= 0 && numero <= 10);
}

function ejecutarCallbacks(algo, callback1, callback2) {
    callback1(algo);
    callback2(algo);
}

function validarIngreso(edad, callback) {
    const esMayor = edad >= 18 ? true : false;
    callback(esMayor);
}