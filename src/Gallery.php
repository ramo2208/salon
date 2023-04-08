<?php
namespace Agregati;

class Gallery {

  public function getPage()
  {
    return file_get_contents('public/gallery.html');
  }
}
