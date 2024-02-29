const usd = 820.50;
const eur = 888.57;
const brl = 173.45;
const clp = 1.07;

let moneda;

// bucle 
do {
    moneda = prompt("Seleccione la moneda a convertir a pesos argentinos:  \n1. USD \n2. EUR \n3. BRL \n4. CLP");
} while (!validarMoneda(moneda));

function validarMoneda(moneda) {
    return ["1", "2", "3", "4"].includes(moneda);
}

let monto = parseFloat(prompt("Ingrese el monto a convertir..."));

function cotizar(monto, moneda) {
    let resultado;
    switch (moneda) {
        case "1":
            resultado = monto * usd;
            break;
        case "2":
            resultado = monto * eur;
            break;
        case "3":
            resultado = monto * brl;
            break;
        case "4":
            resultado = monto * clp;
            break;
        default:
            return "Moneda no válida";
    }
 // Se agregan 2 decimales al resultado.
    return resultado.toFixed(2);
}

let resultado = cotizar(monto, moneda);

alert("La conversión es: " + resultado + " Pesos argentinos");
console.log(resultado);