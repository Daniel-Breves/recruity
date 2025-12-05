<?php
session_start();
if (!isset($_SESSION['id'])) {
    // Redireciona para o login se não estiver logado
    header("Location: ../public/login.html");
    exit;
}
?>