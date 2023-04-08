<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Agregati\Mailer;

require 'vendor/autoload.php';

$app = AppFactory::Create();

$app->get("/", function(Request $request, Response $response, $args){
    $home = new Agregati\Home();
    $homeHtml = $home->getPage();
    $response->getBody()->write($homeHtml);
    return $response;
});

$app->get("/onama", function(Request $request, Response $response, $args){
    $home = new Agregati\About();
    $homeHtml = $home->getPage();
    $response->getBody()->write($homeHtml);
    return $response;
});

$app->get("/galery", function(Request $request, Response $response, $args){
    $home = new Agregati\Gallery();
    $homeHtml = $home->getPage();
    $response->getBody()->write($homeHtml);
    return $response;
});

$app->post("/", function(Request $request, Response $response, $args){
  $data = $request->getParsedBody();
  $fullName =   $data['fullName'];
  $phone =      $data['phone'];
  $email =      $data['email'];
  $msg =    $data['msg'];
  
  $mailer = new Mailer();
  $mailer->sendMail($fullName, $phone, $email, $msg);
  
  $response->getBody()->write("
    <script>
        window.location.href='/';
        alert('Vas mail je poslat!')
    </script>
  ");
  
  return $response;
});






$app->run();
