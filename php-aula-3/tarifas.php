<?php
// 1. Definimos uma cor padrão para a página
$cor_fundo = '#FFFFFF'; // Branco

// 2. Verificamos se uma cor foi enviada pelo formulário
// 'isset' verifica se a variável existe, e '$_GET' pega o valor da URL
if (isset($_GET['cor'])) {
    // Se a cor existe na URL, a variável $cor_fundo recebe esse novo valor
    $cor_fundo = $_GET['cor'];
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mudar Cor do Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            transition: background-color 0.5s ease;
        }

        .container {
            text-align: center;
            margin-top: 50px;
        }

        .botao-cor {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border: 2px solid #333;
            border-radius: 5px;
            margin: 0 10px;
            color: #333;
            font-weight: bold;
        }
    </style>
</head>

<body style="background-color: <?php echo $cor_fundo; ?>;">

    <div class="container">
        <h1>Escolha uma cor para o fundo do site!</h1>

        <form action="index.php" method="get" style="display:inline;">
            <input type="hidden" name="cor" value="#3498db">
            <button type="submit" class="botao-cor" style="background-color: #3498db;">Azul</button>
        </form>

        <form action="index.php" method="get" style="display:inline;">
            <input type="hidden" name="cor" value="#e74c3c">
            <button type="submit" class="botao-cor" style="background-color: #e74c3c;">Vermelho</button>
        </form>

        <form action="index.php" method="get" style="display:inline;">
            <input type="hidden" name="cor" value="#2ecc71">
            <button type="submit" class="botao-cor" style="background-color: #2ecc71;">Verde</button>
        </form>

        <form action="index.php" method="get" style="display:inline;">
            <input type="hidden" name="cor" value="#f1c40f">
            <button type="submit" class="botao-cor" style="background-color: #f1c40f;">Amarelo</button>
        </form>
    </div>

</body>
</html>