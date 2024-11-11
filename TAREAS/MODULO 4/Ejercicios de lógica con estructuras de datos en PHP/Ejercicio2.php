<?php

    function sumarNumerosPares($array) {
        $suma = 0; // Variable para almacenar la suma de los números pares

        foreach ($array as $numero) {
            if ($numero % 2 == 0) { // Verifica si el número es par
                $suma += $numero; 
            }
        }

        return $suma; 
    }

    $numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $sumaPares = sumarNumerosPares($numeros);

    echo "La suma de los números pares es: " . $sumaPares;

?>