<?php
    switch ($opcion) {
        case "opcion1":
            echo "Seleccionaste la opción 1";
            break;
        case "opcion2":
            echo "Seleccionaste la opción 2";
            break;
        case "clima":
            echo 'Escribe el nombre de una ciudad';
            $clima = 1;
            break;
        default:
        $random = input();
            if($clima == 1){
                $city = $random;
                echo weather($city);
                $clima = 0;
            }else{
                echo 'Comando'.$random.' no reconocido';
            }
    }


?>