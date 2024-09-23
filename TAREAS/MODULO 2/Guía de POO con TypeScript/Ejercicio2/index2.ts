class Calculadora {

    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
      return a * b;
    }

    public dividir(a: number, b: number): number {
        return a / b;
    }

    public potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }

    public factorial(n: number): number {
    
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
          resultado *= i;
        }
    
        return resultado;
    }
}

const calculadora = new Calculadora();

console.log("Suma: ", calculadora.sumar(5, 3)); 
console.log("Resta: ", calculadora.restar(10, 4));
console.log("Multiplicación: ", calculadora.multiplicar(7, 6));
console.log("División: ", calculadora.dividir(15, 3)); 
console.log("Potencia: ", calculadora.potencia(2, 3)); 
console.log("Factorial: ", calculadora.factorial(5)); 