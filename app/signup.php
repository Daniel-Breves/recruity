<?php
include('conect.php');

$name = $_POST['name'];
$token = $_POST['token'];

$sql = "INSERT INTO companies (name, registration_token) VALUES (?,?)";
$stmt = $conexao->prepare($sql);
$stmt->bind_param("ss",$name, $token);

if($stmt->execute()){
    header("Location: ../public/login.html");
       
    } else {
        echo "<script>alert('Erro ao cadastrar: " . $stmt->error . "');</script>";
    }
    

    $stmt->close();
    $conexao->close();

?>