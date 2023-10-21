<?php
    $CurrentTime = getdate();
    $SaveTime= $CurrentTime["weekday"] . " " . $CurrentTime["month"] ." " . $CurrentTime["year"] ;
    $SaveTime.=" Time : ";

    if ($CurrentTime["hours"] < 10) {
      $SaveTime.= "0" . $CurrentTime["hours"];
    } else {
      $SaveTime.= $CurrentTime["hours"];
    }
  
    $SaveTime.= ":";
    if ($CurrentTime["minutes"]<10) {
      $SaveTime.= "0" . $CurrentTime["minutes"];
    } else {
      $SaveTime.= $CurrentTime["minutes"];
    }
    
    $SaveTime.= ": ";
    if ($CurrentTime["seconds"] <10) {
      $SaveTime.= "0" . $CurrentTime["seconds"];
    } else {
      $SaveTime.= $CurrentTime["seconds"];
    }
    if (isset($data)) {
       $count=++$data[l];
        setcookie("data[0]",$SaveTime,time() + (60*60*24));
        setcookie("data[l]", $count,time() + (60*60*24)); setcookie("data[2]",$name,time() + (60*60*24));
        echo "<b><center>Hello " . $data[2] . " ! !</center></b><br>\n";
        echo "<b><center>Previous Login Time :" .$data[0] . "</center></b><br>\n";
        echo "<b><center>Date :" .$SaveTime. "</center></b><br>\n";
        echo "<b><center>Viewed pages count:" . $data[l]. "</center></b><br>\n";
        echo "<b><center>logged in! successfully</center></b>";
        echo ("<b><center>Now you can open this page without having to enter a password for the next 24 hours.</center></b>");
   } else {
    if (isset($name) && isset($pass)) {
     if ($pass=="superpass") {
          $count=0;
          setcookie("data[0]",$SaveTime,time() + (60*60*24));
          setcookie("data[l]",$count,time() + (60*60*24));
          setcookie("data[2]",$name,time() + (60*60*24));
          $url="Location: cookieimp.php";
          header($url);
     }else{
          echo "<hl><center>WRONG PASSWORD!!!</center></hl>";
     }
    }
  }
  ?>
