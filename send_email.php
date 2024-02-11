<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "christianjannussabolo19@gmail.com";
    $subject = "New message from $firstName $lastName";
    $body = "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message";

    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>
