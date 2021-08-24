/*
    alert("Hola Mundo");
    console.log();
    console.dir();
*/

// JS ES CASE SENSITIVE

// let holaMundo = "Aprendiendo Javascript";

// console.log(holaMundo);

/*
let precio = 100;
let impuesto = precio * 0.18;
let descuento = precio * 0.1;
let precioFinal = precio + impuesto - descuento;

console.log(precioFinal);
*/

// ------------------- SEXTA CLASE
// TODO TIPO DE DATOS NACE DE UN PROTOTIPO

// let saludo = "Hola Mundo Desde Iguala";

// console.log(saludo);
// console.log(saludo.length);
// console.log(String);

// String es el prototipo y length es su metodo o funcion


// ------------------- SEPTIMA CLASE
// TIPO DE DATO STRING

// let holaMundo = "Hola Mundo";
// let holaMundo = 'Hola Mundo';
// let amigo = "Jon Mircha";
// let saludo = console.log("Bienvenido, " + amigo);

// console.log(saludo);

// USO DEL TEMPLATE STRING
// let amigo = "Edwin Brandon y Sara Hidekel";
// let numero = 2;
// let saludo = console.log(`Bienvenido, ${amigo}, ${numero * 3} veces`);

// ------------------- OCTAVA CLASE
// TIPO DE DATO NUMERICO

// let nacimiento = 1993;
// let year = new Date().getFullYear();
// let edad = year - nacimiento;

// console.log("Tengo " + edad + " Años");

// console.log(5 + 5);
// console.log(5 + "5");

// TIPO DE DATO BOOLEAN
/*
if ("a" == "b") {
    console.log("son iguales");
} else {
    console.log("No son iguales");
}
*/

// let noDefinida;
// let title = document.getElementById("title");

// console.log(typeof title);

// ------------------- CLASE 2.8
/*
let teachers = ['Alexys', 'Daniel', 'Alvaro', 'Jon', 'Francisco', 'Rafa', 'José'];
for (let i = 0; i < teachers.length; i++) {
    if (teachers[i].length > 5 && teachers[i].toUpperCase().indexOf('A') == 0) {
        continue;
    }
    console.log(teachers[i]);
}

let maestros = ['Daniel', 'Alexys', 'Alvaro', 'Jon', 'Francisco', 'Rafa', 'José'];
for (let i = 0; i < maestros.length; i++) {
    if (maestros[i].length > 5 && maestros[i].toUpperCase().indexOf('A') == 0) {
        break;
    }
    console.log(maestros[i]);
}

*/
// ------------------- CLASE 2.9
/*
let i = 100;
while (i > 0) {
    console.log('Debo poner atención a la clase');
    i--;
}

let i = 100;
while (i--) {
    console.log('Debo poner atención a la clase');
}

let password = 'ED';
let pass;
do {
    pass = prompt('Introduce contraseña');
} while (pass != password);
*/
// ------------------- CLASE 2.10
/*
let teachers = ['Alexys', 'Daniel', 'Alvaro', 'Jon', 'Francisco', 'Rafa', 'José'];
for (let teacher of teachers) {
    console.log(teacher);
}
let nombre = 'Brandon';
for (let value of nombre) {
    console.log(value);
}
let links = document.links;
for (let link of links) {
    link.style.color = 'red';
}
*/
// ------------------- CLASE 3.1
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr[0]);

for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    console.log(element);
}

let arr = [1, 2, 3, 4, 'true', 5, 6];
let sum = 0;

for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (typeof element == 'number') {
        sum += element;
    }
}
console.log(sum);
*/
// ------------------- CLASE 3.2
/*
let arr = [1, 2, 3, 4, 'true', 5, 6];
console.log(arr.indexOf(6));

let arr = [1, '2', 3, 4, 'true', 5, 6];
console.log(arr.indexOf(2));

let arr = [1, 2, 3, 4, 'true', 5, 6];
arr.push('JavaScript', 'desde', 'cero');
console.log(arr);

let arr = [1, 2, 3, 4, 'true', 5, 6];
arr.unshift('JavaScript', 'desde', 'cero');
console.log(arr);

let arr = [1, 2, 3, 4, 'true', 5, 6];
console.log(arr.length);
let newLength = arr.unshift('JavaScript', 'desde', 'cero');
console.log(arr);
console.log(newLength);
*/
// ------------------- CLASE 3.3
/*
let arr = [1, 2, 3, 4, 'true', 5, 6];
let deletedEl = arr.pop();
console.log(arr);
console.log(deletedEl);

let arr = [1, 2, 3, 4, 'true', 5, 6];
let deletedEl = arr.shift();
console.log(arr);
console.log(deletedEl);

let arr = [1, 2, 3, 4, 'true', 5, 6];
console.log(arr.join());

let arr = [1, 2, 3, 4, 'true', 5, 6];
arr.splice(4, 1, 'Hola', 'Mundo', 'Brandon');
console.log(arr);

let arr = [1, 2, 3, 4, 'true', 5, 6];
arr.splice(4, 0, 'Hola', 'Mundo', 'Brandon');
console.log(arr);

let arr = [1, 2, 3, 4, 'true', 5, 6];
console.log(arr);
let arr2 = arr.slice(2, 5);
console.log(arr2);

let arr = [1, 2, 3, 4, 'true', 5, 6];
console.log(arr);
let arr2 = arr.slice();
console.log(arr2);
*/
// ------------------- CLASE 3.4
/*
let arr = [1, 2, 3, 4, 5];
let num = arr.find(el => el > 3);
console.log(num);

let arr = [1, 2, 3, 4, 5];
let num = arr.find(el => el > 3);
let numIndex = arr.findIndex(el => el > 3);
console.log(num);
console.log(numIndex);
*/
// ------------------- CLASE 3.5
/*

let arr = [1, 2, 3, 4, 5];
let iterador = arr.keys();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

let arr = [1, 2, 3, 4, 5];
let iterador = arr.entries();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

let arr = [1, 2, 3, 4, 5];
let iterador = arr.values();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/
// ------------------- CLASE 3.6
/*
let yo = {
    nombre: 'Brandon',
    edad: 24,
    país: 'Mexico',
    casado: true,
    hijos: ['hijo1', 'hijo2']
}
yo.ciudad = 'Iguala De La Independencia';

console.log(yo);
console.log(yo.nombre);
console.log(yo.hijos);
console.log(yo.hijos[1]);
console.log(yo.ciudad);
*/
// ------------------- CLASE 3.7
/*
const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};
console.log(ED);
delete ED.fundacion;
console.log(ED);

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};
console.log('profesores' in ED);

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};
Object.prototype.numeroMagico = 27;
console.log('numeroMagico' in ED);
console.log(ED.numeroMagico);

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};
Object.prototype.numeroMagico = 27;
console.log(ED.hasOwnProperty('numeroMagico'));
console.log(ED.hasOwnProperty('eslogan'));

const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};

ED.comunidad = true;
console.log(ED.hasOwnProperty('comunidad'));
*/
// ------------------- CLASE 3.8
/*
const ED = {
    nombre: 'Escuela Digital',
    sedes: ['Bogota', 'Lima'],
    profesores: ['Alexis', 'Daniel', 'Rafa', 'Jon', 'Francisco', 'Jose', 'Alvaro'],
    fundacion: 2010,
    mejorPlataforma: true,
    eslogan: 'Aprende Desde Cero',
    usp: 'Somos el primer sitio en español de eduacion de verdad',
    saludar() {
        return 'Bienvenidos a ED. Te deseamos lo mejor.';
    }
};
let ED2 = Object.assign({}, ED);
console.log(ED);

let a = 'Hola',
    b = 'Mundo';
let myObjt = { a, b }
console.log(myObjt);

let a = 'Hola',
    b = 'Mundo';
let myObj2 = {
    [a + b]: 'Hola Brandon'
}
console.log(myObj2);
*/
// ------------------- CLASE 3.9
/* 
let estudiantes = [{
        nombre: 'Carlos',
        calificacion: 20
    },
    {
        nombre: 'Juan',
        calificacion: 12
    },
    {
        nombre: 'María',
        calificacion: 9
    },
    {
        nombre: 'Pepe',
        calificacion: 7
    },
    {
        nombre: 'Arturo',
        calificacion: 17
    },
];

console.log(estudiantes[0]);
*/
/*
//DE FORMA TRADICIONAL
let estudiantesNombres = [];
for (var i = 0; i < estudiantes.length; i++) {
    estudiantesNombres.push(estudiantes[i].nombre)
}
console.log(estudiantesNombres);

//USANDO .map
let estudiantesNombres = estudiantes.map(alumno => alumno.nombre);
console.log(estudiantesNombres);
*/
// ------------------- CLASE 3.10
/*
let estudiantes = [{
        nombre: 'Carlos',
        calificacion: 20
    },
    {
        nombre: 'Juan',
        calificacion: 12
    },
    {
        nombre: 'María',
        calificacion: 9
    },
    {
        nombre: 'Pepe',
        calificacion: 7
    },
    {
        nombre: 'Arturo',
        calificacion: 17
    },
];
/*
//USANDO .filter
let estudiantesAprobados = estudiantes.filter(alumno => alumno.calificacion > 10);
console.log(estudiantesAprobados);
let estudiantesAprobadosNombres = estudiantesAprobados.map(alumno => alumno.nombre);
console.log(estudiantesAprobadosNombres);
*/
// ------------------- CLASE 3.11
/*
let numeros = [2, 4, 6, 8, 10];
let suma = numeros.reduce((a, b) => a + b);
console.log(suma);

let numeros = [2, 4, 6, 8, 10, 60];
let max = numeros.reduce((a, b) => a > b ? a : b);
console.log(max);
*/
// ------------------- CLASE 3.12
/*
//FORMA TRADICIONAL
let numeros = [2, 4, 60, 8, 10];
let promedio = numeros.reduce((a, b, i, arr) => {
    b = b + a;
    if (i == arr.length - 1) {
        return b / arr.length;
    } else {
        return b;
    }
});
console.log(promedio);

//FORMA SIMPLIFICADA
let numeros = [2, 4, 60, 8, 10];
let promedio = numeros.reduce((a, b, i, arr) => {
    b += a;
    return i == arr.length - 1 ? b / arr.length : b;
});
console.log(promedio);
*/ // ------------------- CLASE 3.13
/*
let estudiantes = [
    { nombre: 'Carlos', calificacion: 20 },
    { nombre: 'Juan', calificacion: 12 },
    { nombre: 'María', calificacion: 9 },
    { nombre: 'Pepe', calificacion: 7 },
    { nombre: 'Arturo', calificacion: 17 },
];

let mejorEstudiante = estudiantes.reduce((a, b) => {
    if (a.calificacion > b.calificacion) {
        return {
            calificacion: a.calificacion,
            nombre: a.nombre
        }
    } else {
        return {
            calificacion: b.calificacion,
            nombre: b.nombre
        }
    }
});
console.log(mejorEstudiante);
*/