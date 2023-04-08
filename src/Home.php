<?php
namespace Agregati;

class Home {

  public function getPage()
  {
    return file_get_contents('public/index.html');
  }
}
