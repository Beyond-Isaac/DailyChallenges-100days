<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Formulário Simples </title>
</head>
<body>
    <h2> Digite o seu nome </h2>
    <form method = 'POST'>
        <input type = "text" name = 'nome' placeholder ='Seu nome'>
        <button type = 'Submit'> Enviar </button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $nome = $_POST['nome'];
        
        echo "Olá $nome!"; 

    }
        ?>
</body>
</html>