<?php
    //Problema de Ordenar Lista con Bubble Sort:
    function bubbleSortDesc(&$array) {
        $n = count($array);
        for ($i = 0; $i < $n - 1; $i++) {
            for ($j = 0; $j < $n - $i - 1; $j++) {
                if ($array[$j] < $array[$j + 1]) {
                    // Intercambiar elementos
                    $temp = $array[$j];
                    $array[$j] = $array[$j + 1];
                    $array[$j + 1] = $temp;
                }
            }
        }
    }

    $numeros = [5, -1, 3, 7, -2, 7, 3, -5];

    echo "Lista original:\n";
    print_r($numeros);

    bubbleSortDesc($numeros);

    echo "\nLista ordenada (descendente):\n";
    print_r($numeros);
?>
