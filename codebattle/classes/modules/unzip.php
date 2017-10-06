<?php
$zip = new ZipArchive;
$res = $zip->open('clear297.zip');
if ($res === TRUE) {
  $zip->extractTo('clear297/');
  $zip->close();
  echo 'ok';
} else {
  echo 'failed';
}
?>