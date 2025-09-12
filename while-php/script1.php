<?php
session_start();  
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Área Restrita</title>
</head>
<body>
    <h2>Login de Usuário</h2>

    <?php
    $senhaCorreta = "senhaSecreta";

    
    if (!isset($_SESSION['tentativas'])) {
        $_SESSION['tentativas'] = 0;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($_SESSION['tentativas'] < 3) {
            $entrada = $_POST['senha'];

            if ($entrada === $senhaCorreta) {
                echo "<p><strong>Login efetuado com sucesso!</strong></p>";
                
                $_SESSION['tentativas'] = 0;
            } else {
                $_SESSION['tentativas']++;
                $restantes = 3 - $_SESSION['tentativas'];

                if ($_SESSION['tentativas'] >= 3) {
                    echo "<p><strong>Você foi bloqueado após 3 tentativas!</strong></p>";
                } else {
                    echo "<p><strong>Senha inválida! Tentativas restantes: $restantes</strong></p>";
                }
            }
        } else {
            echo "<p><strong>Você foi bloqueado após 3 tentativas!</strong></p>";
        }
    }
    ?>

 
    <?php if ($_SESSION['tentativas'] < 3): ?>
        <form method="post">
            <label>Informe a senha de acesso:</label>
            <input type="password" name="senha" required>
            <button type="submit">Fazer Login</button>
        </form>
    <?php endif; ?>
</body>
</html>

<!-- by:isaac-direitos não legais -->