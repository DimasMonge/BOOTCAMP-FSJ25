<?php
    //Ejercicio 1: Problema de la serie Fibonacci
    function generarFibonacci($n) {
    
        $fibonacci = [0, 1];
    
        // Generamos e ingresamos los n numeros pedidos en el arrar
        for ($i = 2; $i < $n; $i++) {
            $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
        }
    
        return $fibonacci;
    }
    
    $n = 10;
    echo "Los primeros $n términos de la serie Fibonacci son: ";
    print_r(generarFibonacci($n));

    //-----------------Ejercicio 2: Problema de números Primos-----------------
    function esPrimo($numero) {
        $contador = 0;
    
        for ($i = 1; $i <= $numero; $i++) {
            if ($numero % $i == 0) {
                $contador++;
            }
        }
    
        // Si el contador es 2, significa que es un numreo primo
        if ($contador == 2) {
            print("El número " . $numero . " es primo");
        } else {
            print("El número " . $numero . " no es primo");
        }
    }

    esPrimo(4);

    
    //-----------------Ejercicio 3: Problema de Palíndromos-----------------
    function esPalindromo($cadena){

        //Quita los espacios y pasa la cadena a minusculas
        $cadena = strtolower(str_replace(' ', '', $cadena));
        
        if ($cadena ==strrev($cadena)){
            return print("$cadena es una palabra/frase Políndroma");
        }else{
            return print("$cadena no es una palabra/frase Políndroma");
        }
    }

    esPalindromo("'Anita lava la tina'");

?>