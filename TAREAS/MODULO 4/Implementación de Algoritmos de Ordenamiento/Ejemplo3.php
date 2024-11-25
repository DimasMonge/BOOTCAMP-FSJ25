<?php
    function insertionSort(&$array) {

        $n = count($array);

        for ($i = 1; $i < $n; $i++) {
            $key = $array[$i];
            $j = $i - 1;

            // Mover los elementos mayores que la clave una posición hacia adelante
            while ($j >= 0 && strcasecmp($array[$j], $key) > 0) {
                $array[$j + 1] = $array[$j];
                $j--;
            }

            // Colocar la clave en su posición correcta
            $array[$j + 1] = $key;
        }
    }

    $nombres = ["Carlos", "ana", "Beatriz", "alfonso", "Diana", "Érica"];

    echo "Lista original:\n";
    print_r($nombres);

    // Ordenar la lista con Insertion Sort
    insertionSort($nombres);

    echo "\nLista ordenada alfabéticamente:\n";
    print_r($nombres);
?>
