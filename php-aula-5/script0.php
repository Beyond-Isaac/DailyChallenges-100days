<!-- ... exercício que pede um formulário: -->

    <?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $total = floatval($_POST["valor"]);
    $qtd = intval($_POST["parcelas"]);

    if ($total <= 0) {
        echo "❌ Valor total inválido";
    } elseif ($qtd < 2 || $qtd > 12) {
        echo "❌ A quantidade de parcelas deve estar entre 2 e 12";
    } else {
        $parcela = $total / $qtd;
        $restante = $total;

        for ($i = 1; $i <= $qtd; $i++) {
            $restante -= $parcela;
            echo "Parcela $i/$qtd - R$ " 
                 . number_format($parcela, 2, ',', '.') 
                 . " | Saldo: R$ " 
                 . number_format(max($restante, 0), 2, ',', '.') 
                 . "<br>";
        }
    }
} else {
    echo "⚠ Nenhum dado foi enviado.";
}

?>