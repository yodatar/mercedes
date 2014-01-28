<?php
@extract($_POST);
$date = stripslashes($date);
$email = stripslashes($email);
$from = stripslashes($from);
$to = stripslashes($to);
$message = stripslashes($message);
if(mail($email,"Email od AutoDoprava","$message ($from, $to, $date, $message)","Od: $email")){
    echo "E-mail zaslaný!";
}
?>