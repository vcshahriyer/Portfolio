<?php

// variables from the form 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
    $subject = $_POST['sub'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 3;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'bh-69.webhostbox.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'primary@raghibnoor.com';                 // SMTP username
    $mail->Password = 'Boishakhi@3588';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Sender
    $mail->setFrom('primary@raghibnoor.com', $email_from);
    //Recipent
    $mail->addAddress('Caesar.rpmc@gmail.com', 'Caesar');

    //Body content
    $body ="<p> <strong>Hi Raghib</strong>, you have recived an email from" .$name."<br><br> His email is ".$email_from ."<br><br>Message :<br>" .$message."</p>";
    
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body);

    if($mail->send()){

      $autoemail = new PHPMailer(true);
      $autoemail->isSMTP(); 
      $autoemail->Host = 'bh-69.webhostbox.net';                 // Specify main and backup SMTP servers
      $autoemail->SMTPAuth = true;                              // Enable SMTP authentication
      $autoemail->Username = 'primary@raghibnoor.com';         // SMTP username
      $autoemail->Password = 'Boishakhi@3588';                // SMTP password
      $autoemail->SMTPSecure = 'ssl';         // Enable TLS encryption, `ssl` also accepted
      $autoemail->Port = 465; 

      //Sender
      $autoemail->setFrom('primary@raghibnoor.com', 'Raghib Noor');

      //Recipent
      $autoemail->addAddress($email_from, $name);

      //Body content
    $autobody ="<p> <strong>Hi </strong>,".$name."<br><br> Thank you for your message<br>I will respond to your message as soon as possible</p>";
    
    //Content
    $autoemail->isHTML(true);                // Set email format to HTML
    $autoemail->Subject = 'Thanks for your attention';
    $autoemail->Body    = $autobody;
    $autoemail->AltBody = strip_tags($autobody);
    $autoemail->send();


    }

} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}



?>