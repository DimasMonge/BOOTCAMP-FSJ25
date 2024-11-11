<?php

    function contarFrecuencia($cadena) {
        $frecuencia = [];
        //str_split convierte en un array la cadena
        foreach (str_split($cadena) as $caracter) {
            // Si el caracter ya existe en el array, incrementa se valor
            $frecuencia[$caracter] = ($frecuencia[$caracter] ?? 0) + 1;
        }

        return $frecuencia;
    }

    $frecuencia = contarFrecuencia("Holiwis");

    print_r($frecuencia);

?>