<?php
$dia = $_POST['dia'];

switch ($dia) {
    case 1:
        echo "Domingo";
        break;
    case 2:
        echo "Segunda-feira";
        break;
    case 3:
        echo "Terça-feira";
        break;
    case 4:
        echo "Quarta-feira";
        break;
    case 5:
        echo "Quinta-feira";
        break;
    case 6:
        echo "Sexta-feira";
        break;
case 7:
        echo "Sábado";
        break;
    default:
        echo "Dia inválido";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tarifaBase = (float) $_POST["tarifa"];
    $tipo = strtolower($_POST["tipo"]);
    $distancia = (float) $_POST["distancia"]; //
    $total = 0;

    switch ($tipo) {
        case "estudante":
            $total = ($tarifaBase * 0.5) * $distancia;
            break;
        case "idoso":
            $total = ($tarifaBase * 0.7) * $distancia;
            break;
        case "trabalhador":
            $total = $tarifaBase * $distancia;
            break;
        case "turista":
            $total = ($tarifaBase * 1.2) * $distancia;
            break;
        case "pessoa com deficiência":
            $total = 0;
            break;
	default:
            echo "<p>Erro: Tipo de passageiro inválido.</p>";
            exit;
    }

    echo "<h2>Resultado</h2>";
    echo "<p>O valor total da tarifa é: <strong>R$ " . number_format($total, 2, ',', '.') . "</strong></p>";
    echo "<br><a href='index.html'>Voltar</a>";
} else {
    echo "<p>Acesso inválido!</p>";
}

?> 

