<?php

    $filas = 5; // Número de filas de la pirámide

    for ($i = 1; $i <= $filas; $i++) {
        echo str_repeat(" ", $filas - $i); // Espacios
        echo str_repeat("*", 2 * $i - 1);  // Asteriscos
        echo "\n"; 
    }
?>