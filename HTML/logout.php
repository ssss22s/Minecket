<?php
if(isset($_GET['logout'])) { 

session_start();
session_destroy();
header('Location: ../HTML/Login.html');
exit;
}
?>
  
<?php 
// After User Click On Logout page.
 require 'database_conn.php'; // Connection
 session_start();    // Session start
?>


 <?php
    if(isset($_POST['logout'])) {  

    if(isset($_SESSION['useremail'])){

     unset($_SESSION["useremail"]);
     session_destroy();
     session_unset();    
     header('Location: ../HTML/Login.html');

      }
    }
 ?>
