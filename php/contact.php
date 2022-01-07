<?php

$errors = [];
$errorMessage = '';


if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($errors)) {
        $toEmail = 'blankensteinwedding@gmail.com';
        $subject = 'New email from OhSweetie';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $body = ["Name: {$name}", "Email: {$email}", "Phone: {$phone}", "Message:", $message];

        $send_email = mail($toEmail,$subject,$body,$headers);
    } else {
        print_r($_POST);
        echo "Error";
        http_response_code(400);
    }
}
?>