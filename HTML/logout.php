<?php
if(isset($_GET['logout'])) { 

session_start();
session_destroy();
header('Location: ./HTML/Login.html');
exit;
}
?>
