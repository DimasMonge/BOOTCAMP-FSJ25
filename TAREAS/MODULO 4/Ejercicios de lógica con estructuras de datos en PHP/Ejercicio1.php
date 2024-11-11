<?php
    //1.       Problema de Lista Invertida
    class crearArray{

        public $array;

        function __construct()
        {
            $this->array = [];
        }

        function insertarValue($data){

            array_push($this->array,$data);
        }

        function invertirArray() {  
            return array_reverse($this->array);
        }
    }

    $array1 = new crearArray();
    $array1->insertarValue(1);
    $array1->insertarValue(2);
    $array1->insertarValue(3);
    $array1->insertarValue(4);
    $array1->insertarValue(5);
    print_r($array1);
    print_r($array1->invertirArray()); 
    
?>