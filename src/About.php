<?php
namespace Agregati;

class About {

  public function getPage()
  {
    return file_get_contents('public/onama.html');
  }
}
