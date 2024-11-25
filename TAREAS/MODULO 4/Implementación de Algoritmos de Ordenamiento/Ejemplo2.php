<?php
     //Problema de Ordenar Lista con Merge Sort:

    function mergeSort($array) {
        // Si el array tiene 1 o menos elementos, ya está ordenado
        if (count($array) <= 1) {
            return $array;
        }

        // Dividir el array en dos mitades
        $mid = floor(count($array) / 2);
        $left = array_slice($array, 0, $mid);
        $right = array_slice($array, $mid);

        return merge(mergeSort($left), mergeSort($right));
    }

    function merge($left, $right) {
        $result = []; // Array para guardar el resultado
        while (count($left) > 0 && count($right) > 0) {
            // Comparar y tomar el menor alfabéticamente (sin importar mayúsculas)
            if (strcasecmp($left[0], $right[0]) <= 0) {
                $result[] = array_shift($left);
            } else {
                $result[] = array_shift($right);
            }
        }
        // Combinar lo que quede en left o right
        return array_merge($result, $left, $right);
    }

    $palabras = ["manzana", "Perro", "Elefante", "Zanahoria", "gato", "Árbol"];

    echo "Lista original:\n";
    print_r($palabras);

    $ordenadas = mergeSort($palabras);

    echo "\nLista ordenada alfabéticamente:\n";
    print_r($ordenadas);
?>
