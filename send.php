<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../PHPMailer/src/Exception.php';
require __DIR__ . '/../../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../../PHPMailer/src/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$message = $_POST['message'];
$title = $_POST['title'];
$file = $_FILES['file'];

$headers = "Content-type: text/html; charset=utf-8 \r\n" . "From: no-reply@letostyle.ru \r\n" . "Reply-To: no-reply@letostyle.ru \r\n";
$emails = [
    'info@letostyle.ru',
    'aleksandr.radchenko.2000@mail.ru'
];

$text = "Имя: $name<br>
Телефон: $phone<br>
";
if (!empty($address)) $text .= "Адрес: $address<br>";
if (!empty($message)) $text .= "Сообщение: $message<br>";
if (!empty($title)) $text .= "Форма: $title<br>";

$mail = new PHPMailer(true);

$mail->IsSMTP();
$mail->CharSet = 'UTF-8';

$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->Username = 'aleksandr.radchenko.2000@yandex.ru';
$mail->Password = 'uuyztlhqpefoybam';

$mail->isHTML(true);
$mail->setFrom('aleksandr.radchenko.2000@yandex.ru', 'Leto');
foreach ($emails as $email) {
    $mail->addAddress($email);
}
$mail->Subject = 'Заявка';
$mail->Body = $text;
$mail->AltBody = $text;
if (!empty($file)) {
    foreach ($file['tmp_name'] as $key => $tmpName) {
        $mail->addAttachment($tmpName, $file['name'][$key], PHPMailer::ENCODING_BASE64, $file['type'][$key]);
    }
}

$mail->send();