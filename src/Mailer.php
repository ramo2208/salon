<?php
namespace Agregati;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mailer {
    private $mailer;

    public function __construct()
    {
        $this->mailer = new PHPMailer(true);
    }

    public function sendMail($fullName, $phone, $email, $msg)
    {

        // Stvaranje instance PHPMailer klase
        $mail = new PHPMailer(true);

        try {
            // Konfiguriranje SMTP postavki za slanje e-pošte
            $mail->isSMTP();
            $mail->Host = 'smtp.example.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'username@example.com';
            $mail->Password = 'password';
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            // Postavljanje informacija o pošiljatelju i primatelju
            $mail->setFrom($email, $fullName);
            $mail->addAddress('primatelj@example.com', 'Ime Primatelja');

            // Postavljanje teme i teksta poruke
            $mail->Subject = 'Domen adresa sajta';
            $mail->Body    = $msg.'\n Tel: '.$phone;

            // Slanje e-pošte
            $mail->send();
            echo 'Poruka je uspješno poslana.';
        } catch (Exception $e) {
            echo 'Poruka nije poslana. Greška: ', $mail->ErrorInfo;
        }

        exit;
    }
}